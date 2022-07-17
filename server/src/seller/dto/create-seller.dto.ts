import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import mongoose, { ObjectId } from 'mongoose';

export class CreateSellerDto {
  @ApiProperty({
    description: 'Seller name',
    example: 'Pino Pizza',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'Seller Logo',
    example:
      'https://res.cloudinary.com/behealthy/image/upload/v1657992970/Delivery/image_rwaaaw.jpg',
  })
  @IsOptional()
  @IsString()
  readonly image: string;
}
