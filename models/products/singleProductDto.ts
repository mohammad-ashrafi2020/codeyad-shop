import { SeconderyChildCategoryDto } from "../categories/categoryDto";
import { SeoData } from "../SeoData";

export interface SingleProductDto {
  productDto: ProductDto;
  inventories: InventoryDto[];
  commentsCount: number;
  rate: string;
  likePercentage: number;
  likeCount: number;
}

export interface ProductDto {
  id: number;
  creationDate: Date;
  title: string;
  imageName: string;
  description: string;
  category: SeconderyChildCategoryDto;
  subCategory: SeconderyChildCategoryDto;
  secondarySubCategory: SeconderyChildCategoryDto;
  slug: string;
  seoData: SeoData;
  images: ProductImageDto[];
  specifications: SpecificationDto[];
}
export interface SpecificationDto {
  key: string;
  value: string;
}
export interface ProductImageDto {
  imageName: string;
  sequence: number;
}
export interface InventoryDto {
  id: number;
  sellerId: number;
  shopName: string;
  productId: number;
  productTitle: string;
  productImage: string;
  count: number;
  price: number;
  discountPercentage: number;
}
