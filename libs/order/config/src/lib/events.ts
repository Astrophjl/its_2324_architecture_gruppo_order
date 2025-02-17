import { EventsDefinition } from '@utils/event-utils';

export class TestPayload {
  productId!: string;
}

export const OrderEventsDefinitions = {
  TestWarehouseEvent: {
    identifier: 'test',
    payloadType: TestPayload,
  },
} satisfies EventsDefinition;
