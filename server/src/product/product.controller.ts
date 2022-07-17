import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';

@ApiTags('Product')
@Controller('/products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  @ApiOperation({ summary: 'Create a product' })
  @ApiBody({ type: CreateProductDto })
  create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  getAll(@Query('count') count: number, @Query('offset') offset: number) {
    return this.productService.getAll(count, offset);
  }

  @Get('/search')
  search(@Query('query') query: string) {
    return this.productService.search(query);
  }

  @Get('/:id')
  @ApiOperation({ summary: ' Get product by Id ' })
  @ApiParam({ name: 'id' })
  getOne(@Param('id') id: ObjectId) {
    return this.productService.getOne(id);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete product' })
  @ApiParam({ name: 'id' })
  delete(@Param('id') id: ObjectId) {
    return this.productService.delete(id);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Update product' })
  @ApiParam({ name: 'id' })
  update(@Param('id') id: ObjectId, @Body() dto: CreateProductDto) {
    return this.productService.update(id, dto);
  }
}
