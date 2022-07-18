import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
