import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create-oder.dto';
import { OrderService } from './order.service';

@ApiTags('Order')
@Controller('/orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  @ApiOperation({ summary: 'Create a order' })
  @ApiBody({ type: CreateOrderDto })
  create(@Body() dto: CreateOrderDto) {
    console.log(dto);
    // return 'OK';
    return this.orderService.create(dto);
  }
  @Get()
  @ApiOperation({ summary: 'Get all orders' })
  getAll() {
    return this.orderService.getAll();
  }

  @ApiOperation({ summary: 'Get orders history by email' })
  @Get('/search/email')
  searchByEmail(@Query('query') query: string) {
    return this.orderService.searchByEmail(query);
  }
  @ApiOperation({ summary: 'Get orders history by phone' })
  @Get('/search/phone')
  searchByPhone(@Query('query') query: string) {
    return this.orderService.searchByPhone(query);
  }
}
