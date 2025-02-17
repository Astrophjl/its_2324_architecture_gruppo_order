import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ORDER_MESSAGE_HOST, ORDER_MESSAGE_PORT } from '@order/config';
import { OrderMessageClientService } from './messa-client.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ORDER_CLIENT',
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6379,
        },
      },
    ]),
  ],
  providers: [OrderMessageClientService],
  exports: [OrderMessageClientService],
})
export class OrderMessageClientModule {}
