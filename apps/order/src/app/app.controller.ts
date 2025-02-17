import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrderService } from './app.service';

@Controller('orders') // Definiamo il percorso base dell'API: /orders
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  // Endpoint per creare un ordine
  @Post()
  createOrder(@Body() orderData: { productId: string; quantity: number }) {
    return this.orderService.createOrder(orderData);
  }

  // Endpoint per ottenere lo stato di un ordine
  @Get(':id/status')
  getOrderStatus(@Param('id') orderId: string) {
    return this.orderService.getOrderStatus(orderId);
  }
}
