import mongoose, { ObjectId } from 'mongoose';
import {
  IsArray,
  IsDecimal,
  IsEmail,
  IsEmpty,
  IsIn,
  IsMongoId,
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
          example: '62d02cdbd78210da03d0d52c',
        },
      },
    ],

    required: true,
    description: 'Products',
    default: [],
  })
  @IsNotEmpty()
  items: { item: ObjectId; quantity: number }[];

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
