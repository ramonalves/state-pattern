import { OrderState, Order } from '.';
import log from './../log';

export class OrderCanceled implements OrderState {
  private stateName = 'OrderCanceled';

  constructor(private order: Order) {}

  getStateName(): string {
    return this.stateName;
  }

  approvePayment(): void {
    log('O pedido está cancelado e não pode ser aprovado.');
  }

  rejectPayment(): void {
    log('O pedido está cancelado e não pode ser rejeitado.');
  }

  cancelOrder(): void {
    log('O pedido já está cancelado');
  }

  waitIntegration(): void {
    log('O pedido está cancelado e não pode voltar para integração.');
  }

  waitPayment(): void {
    console.log('O pedido está cancelado e não pode voltar para aguardando pagamento');
  }

  shipOrder(): void {}
}
