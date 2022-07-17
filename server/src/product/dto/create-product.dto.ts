import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import mongoose from 'mongoose';

export class CreateProductDto {
  @ApiProperty({
    description: 'Product Seller',
    example: '62d41f6508c42dc6546b99cd',
    required: true,
  })
  @IsMongoId()
  @IsNotEmpty()
  readonly sellerId: mongoose.Schema.Types.ObjectId;

  @ApiProperty({
    description: 'Product name',
    example: 'Fish Grill',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'Product price',
    example: 199.99,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @ApiProperty({
    description: 'Product image',
    example:
      'https://res.cloudinary.com/behealthy/image/upload/v1657832668/Delivery/pexels-dana-tentis-262959_gh8kae.jpg',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  readonly image: string;
}
