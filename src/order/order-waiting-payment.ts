import { OrderApproved, OrderState, Order, OrderCanceled } from '.';
import log from '../log';

export class OrderWaitingPayment implements OrderState {
  private stateName = 'OrderWaitingPayment';

  constructor(private order: Order) {}

  getStateName(): string {
    return this.stateName;
  }

  approvePayment(): void {
    this.order.setState(new OrderApproved(this.order));
  }

  waitPayment(): void {
    log('O pedido já está aguardando pagamento.');
  }

  waitIntegration(): void {
    log('O pedido já está integrado.');
  }

  cancelOrder(): void {
    this.order.setState(new OrderCanceled(this.order));
  }

  shipOrder(): void {}
}
