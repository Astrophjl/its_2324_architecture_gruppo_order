import {
  clientMessageDecoratorFactory,
  MessagesDefinition,
} from '@utils/message-utils';

export class GetStockQuantityInput {
  productId!: string;
}

export class GetStockQuantityResult {
  productId!: string;
  quantity!: number;
}

export const OrderMessageDefinitions = {
  StockQuantityMessage: {
    identifier: 'getStockQuantity',
    payloadType: GetStockQuantityInput,
    responseType: GetStockQuantityResult,
  },
} satisfies MessagesDefinition;

export const OrderMessage = clientMessageDecoratorFactory(
  OrderMessageDefinitions,
  'wh'
);

// Eventi in uscita
