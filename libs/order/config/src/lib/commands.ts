import { EventsDefinition } from '@utils/event-utils';

export class OrderStatusPayload {
  orderId!: string;
  status!: string;
}

export const OrderEventsDefinitions = {
  OrderStatusChange: {
    identifier: 'order_status_change',
    payloadType: OrderStatusPayload,
  },
  PaymentConfirmed: {
    identifier: 'payment_confirmed',
    payloadType: OrderStatusPayload,
  },
  ShipmentStarted: {
    identifier: 'shipment_start',
    payloadType: OrderStatusPayload,
  },
} satisfies EventsDefinition;
