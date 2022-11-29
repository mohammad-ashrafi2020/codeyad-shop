import { baseFilterParams } from "~/models/base/baseFilterParams";
import { baseFilterResult } from "~/models/base/baseFilterResult";

export interface CommentDto {
  id: number;
  creationDate: Date;
  productId: number;
  userId: number;
  userFullName: string;
  productTitle: string;
  text: string;
  status: number;
  rate: number;
  disadvantages: string[];
  advantages: string[];
  userRecommendedStatus: UserRecommendedStatus;
}

export interface ProductCommentFilterResult
  extends baseFilterResult<CommentDto> {}
export enum UserRecommendedStatus {
  پیشنهاد_میکنم = 0,
  پیشنهاد_نمی_کنم = 1,
  مطمئن_نیستم = 2,
}

export interface SendCommentDto {
  userId: number;
  productId: number;
  text: string;
  disadvantages: string;
  advantages: string;
  userRecommendedStatus: UserRecommendedStatus;
  rate: number;
}
