export const ORDER_MESSAGE_HOST = process.env['ORDER_MESSAGE_HOST']
  ? process.env['ORDER_MESSAGE_HOST']
  : '127.0.0.1';
export const ORDER_MESSAGE_PORT = process.env['ORDER_MESSAGE_PORT']
  ? parseInt(process.env['ORDER_MESSAGE_PORT'])
  : 3200;
