import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateSellerDto } from './dto/create-seller.dto';
import { Seller, SellerDocument } from './schemas/seller.entity';

@Injectable()
export class SellerService {
  constructor(
    @InjectModel(Seller.name) private sellerModel: Model<SellerDocument>,
  ) {}

  async create(dto: CreateSellerDto): Promise<Seller> {
    const seller = await this.sellerModel.create(dto);
    return seller;
  }

  async getAll(): Promise<Seller[]> {
    const sellers = await this.sellerModel.find();
    return sellers;
  }

  async getOne(id: ObjectId): Promise<Seller> {
    const seller = await (
      await this.sellerModel.findById(id)
    ).populate(['orders', 'coupons', 'products']);
    return seller;
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const seller = await this.sellerModel.findByIdAndDelete(id);
    return seller._id;
  }
}
