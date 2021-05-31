export enum OrderStatus {
  // When the order has been created
  // but the ticket it is trying to order has not been reserved
  Created = "created",

  // The ticket the order is trying to reserve has already
  // been reserved, or when the user has cancelled the order
  // orders expires before payment
  Cancelled = "cancelled",

  // When the order has successfully reserved the ticket
  Awaiting = "awaiting:payment",

  // reserved and user payment succeeds
  Complete = "complete",
}
