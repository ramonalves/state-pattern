import { OrderApproved, OrderState, Order, OrderWaitingPayment } from '.';
import log from '../log';

export class OrderWaitingIntegration implements OrderState {
  private stateName = 'OrderWaitingIntegration';

  constructor(private order: Order) {}

  getStateName(): string {
    return this.stateName;
  }

  approvePayment(): void {
    this.order.setState(new OrderApproved(this.order));
  }

  cancelOrder(): void {
    this.order.setState(new OrderApproved(this.order));
  }

  waitIntegration(): void {
    log('O pedido já está aguardando integração.');
  }

  waitPayment(): void {
    this.order.setState(new OrderWaitingPayment(this.order));
  }

  shipOrder(): void {}
}
