import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { Document, ObjectId } from 'mongoose';

export type CouponDocument = Coupon & Document;

@Schema({ timestamps: true, versionKey: false })
export class Coupon {
  @ApiProperty({
    type: mongoose.Schema.Types.ObjectId,
    description: 'Coupon ID',
    example: '62d0322ebb564391e5e92d13',
  })
  _id: mongoose.Types.ObjectId;

  @ApiProperty({
    type: mongoose.Schema.Types.ObjectId,
    description: 'Seller ID',
    example: '62d01b156787f02ad2a4f8c1',
  })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Seller', required: true })
  sellerId: ObjectId;

  @ApiProperty({
    type: String,
    description: 'Coupon description',
    example: '10% off on all products',
  })
  @Prop({ type: String, required: true })
  description: string;

  @ApiProperty({
    type: String,
    description: 'Coupon image',
    example:
      'https://res.cloudinary.com/behealthy/image/upload/v1657810473/Delivery/pexels-karolina-grabowska-5625008_iuaxpb.jpg',
  })
  @Prop({ type: String, required: true })
  image: string;

  @ApiProperty({
    type: String,
    description: 'Coupon code',
    example: '50OFF',
  })
  @Prop({ required: true })
  code: string;

  @ApiProperty({
    type: Number,
    description: 'Coupon discount',
    example: 50,
  })
  @Prop({ type: Number, required: true })
  discount: number;

  @ApiProperty({
    type: Date,
    description: 'Coupon expiration date',
    example: '2022-11-01',
  })
  @Prop({ type: Date, required: true })
  startDate: Date;

  @ApiProperty({
    type: Date,
    description: 'Coupon expiration date',
    example: '2022-11-31',
  })
  @Prop({ type: Date, required: false })
  endDate: Date;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const CouponSchema = SchemaFactory.createForClass(Coupon);
