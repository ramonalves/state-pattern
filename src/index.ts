import { Order, OrderData } from './order';

const orderData: OrderData = {
  orderId: 1,
  orderTotal: 599,
};

const newOrder = new Order(orderData);
newOrder.approvePayment();
newOrder.shipOrder();
