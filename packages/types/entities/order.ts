export type Order = {
  price: number;
  size: number;
  totalSize?: number;
  fill?: number;
};

export type OrderState = {
  asks: Order[];
  bids: Order[];
};

export enum OrderFeedResponse {
  SNAPSHOT = "book_ui_1_snapshot",
  BOOK = "book_ui_1",
}

export type OrderResponse = [number, number];
export type OrdersResponse = {
  feed: OrderFeedResponse;
  asks: OrderResponse[];
  bids: OrderResponse[];
};
