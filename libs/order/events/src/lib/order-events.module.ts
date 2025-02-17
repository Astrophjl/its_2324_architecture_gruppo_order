import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrderEventService } from './order-event.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ORDER_EVENT_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6379,
        },
      },
    ]),
  ],
  providers: [OrderEventService],
  exports: [OrderEventService],
})
export class OrderEventsModule {}
