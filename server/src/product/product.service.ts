import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Seller, SellerDocument } from 'src/seller/schemas/seller.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { Product, ProductDocument } from './schemas/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    @InjectModel(Seller.name) private sellerModel: Model<SellerDocument>,
  ) {}
  async create(dto: CreateProductDto): Promise<Product> {
    const seller = await this.sellerModel.findById(dto.sellerId);
    const product = await this.productModel.create({
      ...dto,
    });
    seller.products.push(product._id);
    await seller.save();

    return product;
  }

  async getAll(count = 10, offset = 0): Promise<Product[]> {
    const products = await this.productModel.find().skip(offset).limit(count);
    return products;
  }

  async search(query: string): Promise<Product[]> {
    const products = await this.productModel.find({
      name: { $regex: new RegExp(query, 'i') },
    });
    return products;
  }

  async getOne(id: ObjectId): Promise<Product> {
    const product = await this.productModel.findById(id);
    return product;
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const product = await this.productModel.findByIdAndDelete(id);
    return product._id;
  }

  async update(id: ObjectId, dto: CreateProductDto): Promise<Product> {
    const product = await this.productModel.findByIdAndUpdate(id, dto);
    return product;
  }
}
