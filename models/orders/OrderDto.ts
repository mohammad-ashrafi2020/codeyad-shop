import { baseFilterResult } from "~/models/base/baseFilterResult";
import { AddressDto } from "./../users/addressDto";
import { OrderItemDto } from "./OrderItemDto";

export interface OrderDto {
  id: number;
  creationDate: Date;
  userId: number;
  userFullName: string;
  status: OrderStatus;
  discount: DiscountDto;
  address: AddressDto;
  shippingMethod: OrderShippingMethodDto;
  items: OrderItemDto[];
  lastUpdate: Date;
  totalPrice: number;
}
export interface DiscountDto {
  discountTitle: string;
  discountAmount: number;
}
export interface OrderShippingMethodDto {
  shippingType: string;
  shippingCost: number;
}
export interface OrderFilterResult extends baseFilterResult<OrderFilterData> {}

export interface OrderFilterData {
  id: number;
  creationDate: Date;
  userId: number;
  userFullName: string;
  status: OrderStatus;
  shire: string;
  city: string;
  shippingType: string;
  totalPrice: number;
  totalItemCount: number;
}

export enum OrderStatus {
  Pending,
  Finally,
  Shipping,
  Rejected,
}
