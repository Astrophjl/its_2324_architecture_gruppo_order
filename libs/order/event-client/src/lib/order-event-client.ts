import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { clientEventDecoratorFactory } from '@utils/event-utils';
import { OrderEventsDefinitions } from '@order/config';

export const getWarehouseEventConfig = (): MicroserviceOptions => {
  return {
    transport: Transport.REDIS,
    options: {
      host: 'localhost',
      port: 6379,
    },
  };
};

export const OrderEvent = clientEventDecoratorFactory(
  OrderEventsDefinitions,
  'wh'
);
