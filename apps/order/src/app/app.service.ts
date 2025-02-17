import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  private orders: { [key: string]: { status: string } } = {}; // Simuliamo un database in memoria

  createOrder(orderData: { productId: string; quantity: number }) {
    const orderId = Math.random().toString(36).substr(2, 9); // Generiamo un ID casuale
    this.orders[orderId] = { status: 'created' };
    return { orderId, message: 'Order created successfully' };
  }

  getOrderStatus(orderId: string) {
    return this.orders[orderId] || { message: 'Order not found' };
  }
}
