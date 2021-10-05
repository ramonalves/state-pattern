import { Order, OrderState, OrderCanceled, OrderShiped } from '.';
import log from './../log';

export class OrderApproved implements OrderState {
  private stateName = 'OrderApproved';

  constructor(private order: Order) {}

  getStateName(): string {
    return this.stateName;
  }

  approvePayment(): void {
    log('O pedido já está com pagamento aprovado.');
  }

  cancelOrder(): void {
    this.order.setState(new OrderCanceled(this.order));
  }

  waitIntegration(): void {
    log('O pedido está aprovado e não pode voltar para a integração.');
  }

  waitPayment(): void {
    log('O pedido está aprovado e não pode voltar para aguarando pagamento');
  }

  shipOrder(): void {
    this.order.setState(new OrderShiped(this.order));
  }
}
