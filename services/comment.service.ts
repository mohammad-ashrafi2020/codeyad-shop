import { ApiResponse } from "~~/models/ApiResponse";
import {
  ProductCommentFilterResult,
  SendCommentDto,
} from "~~/models/comments/commentDto";
import { FetchApi } from "~~/utilities/CustomFechApi";

export const GetProductComments = (
  productId: number
): Promise<ApiResponse<ProductCommentFilterResult>> => {
  return FetchApi("/comment/productComments", {
    params: {
      pageId: 1,
      take: 100,
      productId,
    },
  });
};

export const AddComment = (
  command: SendCommentDto
): Promise<ApiResponse<undefined>> => {
  return FetchApi("comment", {
    method: "POST",
    body: command,
  });
};
