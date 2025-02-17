import { TestPayload, OrderEventsDefinitions } from '@order/config';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrderEventService {
  constructor(
    @Inject('ORDER_EVENT_SERVICE') protected orderClient: ClientProxy
  ) {}

  sendStatusChange(payload: TestPayload) {
    this.orderClient.emit(`wh_test`, payload);
  }
}
