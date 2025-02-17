import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
  GetStockQuantityInput,
  GetStockQuantityResult,
  OrderMessageDefinitions,
} from '@order/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class OrderMessageClientService {
  constructor(@Inject('ORDER_CLIENT') private client: ClientProxy) {}

  async getStockQuantity(data: GetStockQuantityInput) {
    return lastValueFrom(
      this.client.send<GetStockQuantityResult>(
        {
          cmd: `wh_${OrderMessageDefinitions.StockQuantityMessage.identifier}`,
        },
        data
      )
    );
  }
}
