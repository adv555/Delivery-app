import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import mongoose, { ObjectId } from 'mongoose';

export class CreateCouponDto {
  @ApiProperty({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    description: 'Seller ID',
    example: '62d01b156787f02ad2a4f8c1',
  })
  @IsMongoId()
  @IsNotEmpty()
  readonly sellerId: ObjectId;

  @ApiProperty({
    type: String,
    required: true,
    description: 'Coupon description',
    example: '10% off on all products',
  })
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @ApiProperty({
    type: String,
    required: true,
    description: 'Coupon image',
    example:
      'https://res.cloudinary.com/behealthy/image/upload/v1657810473/Delivery/pexels-karolina-grabowska-5625008_iuaxpb.jpg',
  })
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;

  @ApiProperty({
    type: String,
    required: true,
    description: 'Coupon code',
    example: '50OFF',
  })
  @IsString()
  @IsNotEmpty()
  readonly code: string;

  @ApiProperty({
    type: Number,
    required: true,
    description: 'Coupon discount',
    example: 50,
  })
  @IsNumber()
  @IsNotEmpty()
  readonly discount: number;

  @ApiProperty({
    type: Date,
    required: true,
    description: 'Coupon start date',
    example: '2022-11-01',
  })
  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  readonly startDate: Date;

  @ApiProperty({
    type: Date,
    required: false,
    description: 'Coupon end date',
    example: '2022-11-31',
  })
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  readonly endDate: Date;
}
