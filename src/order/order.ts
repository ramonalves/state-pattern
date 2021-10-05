import { OrderState, OrderWaitingIntegration } from './';
import log from './../log';

export type OrderData = {
  orderId: number;
  orderTotal: number;
};

export class Order {
  private state: OrderState = new OrderWaitingIntegration(this);

  constructor(private orderData: OrderData) {
    log(`Pedido: ${orderData?.orderId} - Valor: R$ ${orderData.orderTotal}`);
    log(`Estado Inicial: ${this.getStateName()}`);
  }

  getData(): OrderData {
    return this.orderData;
  }

  getState(): OrderState {
    return this.state;
  }

  setState(state: OrderState): void {
    this.state = state;
    log(`Novo Estado: ${this.getStateName()}`);
  }

  getStateName(): string {
    return this.state.getStateName();
  }

  approvePayment(): void {
    this.state.approvePayment();
  }

  cancelOrder(): void {
    this.state.cancelOrder();
  }

  waitIntegration(): void {
    this.state.waitIntegration();
  }

  waitPayment(): void {
    this.state.waitPayment();
  }

  shipOrder(): void {
    this.state.shipOrder();
  }
}
