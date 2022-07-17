import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Seller } from 'src/seller/schemas/seller.entity';
import { ApiProperty } from '@nestjs/swagger';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true, versionKey: false })
export class Product {
  @ApiProperty({
    example: '62cd9424c1502deca6b4dc6c',
    type: mongoose.Schema.Types.ObjectId,
    description: 'Product ID',
  })
  _id: string;

  @ApiProperty({
    description: 'Product Seller',
    example: '62d41f6508c42dc6546b99cd',
    type: mongoose.Schema.Types.ObjectId,
  })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Seller' })
  sellerId: Seller;

  @ApiProperty({
    example: 'Fish Grill',
    type: String,
    description: 'Product name',
  })
  @Prop({ required: true })
  name: string;

  @ApiProperty({
    example: 199.99,
    type: Number,
    description: 'Product price',
  })
  @Prop({ required: true })
  price: number;

  @ApiProperty({
    example:
      'https://res.cloudinary.com/behealthy/image/upload/v1657832668/Delivery/pexels-dana-tentis-262959_gh8kae.jpg',
    type: String,
    description: 'Product image',
  })
  @Prop()
  image: string;

  @ApiProperty({
    description: 'Product created at',
    example: '2020-01-01T00:00:00.000Z',
    type: Date,
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Product updated at',
    example: '2020-01-01T00:00:00.000Z',
    type: Date,
  })
  updatedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
