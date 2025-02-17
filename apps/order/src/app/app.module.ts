import { Module } from '@nestjs/common';
import { OrderController } from './app.controller';
import { OrderService } from './app.service';

@Module({
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService],
})
export class AppModule {}
