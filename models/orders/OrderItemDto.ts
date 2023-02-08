export interface OrderItemDto {
  id: number;
  creationDate: Date;
  productTitle: string;
  productSlug: string;
  productImageName: string;
  shopName: string;
  orderId: number;
  inventoryId: number;
  count: number;
  price: number;
  totalPrice: number;
}
