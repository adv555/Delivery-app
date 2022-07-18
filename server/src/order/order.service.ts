import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seller, SellerDocument } from 'src/seller/schemas/seller.entity';
import { CreateOrderDto } from './dto/create-oder.dto';
import { Order, OrderDocument } from './schemas/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) readonly orderModel: Model<OrderDocument>,
    @InjectModel(Seller.name) readonly sellerModel: Model<SellerDocument>,
  ) {}
  async create(dto: CreateOrderDto): Promise<Order> {
    const productId = dto.items[0].productId;
    const sellerId = await this.sellerModel.findOne({
      products: { $in: [productId] },
    });
    const seller = await this.sellerModel.findById(sellerId);
    console.log(dto);
    const order = await this.orderModel.create(dto);
    seller.orders.push(order._id);
    await seller.save();
    return order;
  }

  async getAll(): Promise<Order[]> {
    const orders = await this.orderModel.find();
    return orders;
  }

  async searchByEmail(query: string): Promise<Order[]> {
    const orders = await this.orderModel.find({
      email: { $regex: new RegExp(query, 'i') },
    });

    return orders;
  }
  async searchByPhone(query: string): Promise<Order[]> {
    const orders = await this.orderModel.find({
      phone: { $regex: new RegExp(query, 'i') },
    });
    return orders;
  }
}
