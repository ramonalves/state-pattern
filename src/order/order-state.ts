export interface OrderState {
  getStateName(): string;
  approvePayment(): void;
  cancelOrder(): void;
  waitPayment(): void;
  waitIntegration(): void;
  shipOrder(): void;
}
