import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { ObjectId } from 'mongoose';
import { CreateSellerDto } from './dto/create-seller.dto';
import { Seller } from './schemas/seller.entity';
import { SellerService } from './seller.service';

@ApiTags('Seller')
@Controller('/sellers')
export class SellerController {
  constructor(private sellerService: SellerService) {}

  @Post()
  @ApiOperation({ summary: 'Create a seller' })
  @ApiBody({ type: CreateSellerDto })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Seller,
  })
  create(@Body() dto: CreateSellerDto) {
    return this.sellerService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all sellers' })
  getAll() {
    return this.sellerService.getAll();
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get seller by id' })
  @ApiParam({ name: 'id' })
  getOne(@Param('id') id: ObjectId) {
    return this.sellerService.getOne(id);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete seller' })
  @ApiParam({ name: 'id' })
  delete(@Param('id') id: ObjectId) {
    return this.sellerService.delete(id);
  }
}
