import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { Date, Document, ObjectId } from 'mongoose';
import { Coupon } from 'src/coupon/schemas/coupon.entity';
import { Order } from 'src/order/schemas/order.entity';
import { Product } from 'src/product/schemas/product.entity';
// import { Coupon } from 'src/coupon/schemas/coupon.entity';

export type SellerDocument = Seller & Document;

@Schema({ timestamps: true, versionKey: false })
export class Seller {
  @ApiProperty({
    example: '62cd9424c1502deca6b4dc6c',
    type: mongoose.Schema.Types.ObjectId,
    description: 'Seller ID',
  })
  _id: ObjectId;

  @ApiProperty({
    example: 'Big Mac',
    type: String,
    description: 'Seller brand name',
  })
  @Prop({ required: true })
  name: string;

  @ApiProperty({
    example:
      'https://res.cloudinary.com/behealthy/image/upload/v1657802460/Delivery/pexels-enric-cruz-lo%CC%81pez-6039252_neg0bm.jpg',
    type: String,
    description: 'Seller logo',
  })
  @Prop()
  image: string;

  @ApiProperty({
    description: 'Seller products',
    type: [Product],
  })
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
  products: Product[];

  @ApiProperty({
    description: 'Seller orders',
    type: [Order],
  })
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }] })
  orders: Order[];

  @ApiProperty({
    description: 'Seller coupons',
    type: [Coupon],
  })
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Coupon' }] })
  coupons: Coupon[];

  @ApiProperty({
    type: Date,
    description: 'Seller creation date',
    example: '2020-01-01T00:00:00.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    type: Date,
    description: 'Seller last update date',
    example: '2020-01-01T00:00:00.000Z',
  })
  updatedAt: Date;
}

export const SellerSchema = SchemaFactory.createForClass(Seller);
