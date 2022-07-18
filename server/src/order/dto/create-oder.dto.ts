import mongoose, { ObjectId } from 'mongoose';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({
    type: String,
    description: 'Customer Name',
    example: 'John Doe',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    description: 'Customer Address',
    example: '123 Main St',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({
    type: String,
    description: 'Customer Phone',
    example: '+380677777777',
    required: true,
  })
  @IsPhoneNumber('UA')
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    type: String,
    description: 'Customer Email',
    example: 'email@gmail.com',
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
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
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          description: 'Product ID',
          example: '62d423db62e06161bf2fa95e',
        },
        productName: {
          type: String,
          required: true,
          description: 'Product Name',
          example: 'Burger',
        },
        productImage: {
          type: String,
          required: true,
          description: 'Product Image',
          example:
            'https://res.cloudinary.com/behealthy/image/upload/v1657832668/Delivery/pexels-dana-tentis-262959_gh8kae.jpg',
        },
      },
    ],

    required: true,
    description: 'Products',
    default: [],
  })
  @IsNotEmpty()
  items: {
    productId: ObjectId;
    quantity: number;
    productName: string;
    productImage: string;
  }[];

  @ApiProperty({
    type: Number,
    required: true,
    description: 'Total',
    example: 199.99,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  total: number;
}
