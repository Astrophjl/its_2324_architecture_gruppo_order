import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { OrderStatusPayload } from '../../../config/src/lib/commands';

@Injectable()
export class OrderEventService {
  constructor(
    @Inject('ORDER_EVENT_SERVICE') private readonly orderClient: ClientProxy
  ) {}

  sendOrderStatusChange(orderId: string, status: string) {
    const payload: OrderStatusPayload = { orderId, status };
    this.orderClient.emit('order_status_change', payload);
  }

  sendPaymentConfirmed(orderId: string) {
    const payload: OrderStatusPayload = { orderId, status: 'payed' };
    this.orderClient.emit('payment_confirmed', payload);
  }

  sendShipmentStart(orderId: string) {
    const payload: OrderStatusPayload = { orderId, status: 'shipping' };
    this.orderClient.emit('shipment_start', payload);
  }
}
