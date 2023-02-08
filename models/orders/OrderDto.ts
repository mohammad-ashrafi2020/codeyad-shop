import { AddressDto } from './../users/addressDto';
import { OrderItemDto } from "./OrderItemDto";

export interface OrderDto {
  id: number;
  creationDate: Date;
  userId: number;
  userFullName: string;
  status: number;
  discount: DiscountDto;
  address: AddressDto;
  shippingMethod: ShippingMethod;
  items: OrderItemDto[];
}
export interface DiscountDto {
  discountTitle: string;
  discountAmount: number;
}
export interface ShippingMethodDto {
  shippingType: string;
  shippingCost: number;
}
