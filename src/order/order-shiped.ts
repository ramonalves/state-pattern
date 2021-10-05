import { OrderState } from './order-state';
import { Order } from './order';
import log from '../log';

export class OrderShiped implements OrderState {
  private stateName = 'OrderShiped';

  constructor(private order: Order) {}

  getStateName(): string {
    return this.stateName;
  }

  approvePayment(): void {
    log('O pedido já foi enviado ao cliente.');
  }

  rejectPayment(): void {
    log('O pedido já foi enviado ao cliente.');
  }

  cancelOrder(): void {
    log('O pedido já foi enviado ao cliente.');
  }

  waitIntegration(): void {
    log('O pedido já foi enviado ao cliente.');
  }

  waitPayment(): void {
    log('O pedido já foi enviado ao cliente.');
  }

  shipOrder(): void {
    log('O pedido já foi enviado ao cliente.');
  }
}
