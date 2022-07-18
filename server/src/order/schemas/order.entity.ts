import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { Document, ObjectId } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema({ timestamps: true, versionKey: false })
export class Order {
  @ApiProperty({
    type: mongoose.Schema.Types.ObjectId,
    description: 'Order ID',
    example: '62d00bc5e4679b723b138792',
  })
  _id: ObjectId;

  @ApiProperty({
    type: String,
    description: 'Customer Name',
    example: 'John Doe',
    required: true,
  })
  @Prop({ required: true })
  name: string;

  @ApiProperty({
    type: String,
    description: 'Customer Address',
    example: '123 Main St',
    required: true,
  })
  @Prop({ required: true })
  address: string;

  @ApiProperty({
    type: String,
    description: 'Customer Phone',
    example: '+380677777777',
    required: true,
  })
  @Prop({ required: true })
  phone: string;

  @ApiProperty({
    type: String,
    description: 'Customer Email',
    example: 'email@gmail.com',
    required: true,
  })
  @Prop({ trim: true, required: true })
  email: string;

  @ApiProperty({
    isArray: true,
    type: [
      {
        quantity: {
          type: Number,
          required: true,
          description: 'Quantity',
          example: 1,
        },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          description: 'Product ID',
          example: '62d423db62e06161bf2fa95e',
        },
      },
    ],
    required: true,
    description: 'Products',
    default: [],
  })
  @Prop({
    type: [
      {
        quantity: { type: Number },
        productId: { type: mongoose.Schema.Types.ObjectId },
      },
    ],
  })
  items: { productId: ObjectId; quantity: number }[];

  @ApiProperty({
    type: Number,
    description: 'Total',
    example: 199.99,
  })
  @Prop({ type: Number })
  total: number;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
