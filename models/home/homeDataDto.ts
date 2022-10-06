import { ProductCardDto } from "../ProductCard";

export interface BannerDto {
  creationDate: Date;
  link: string;
  imageName: string;
  position: BannerPosition;
}
export enum BannerPosition {
  زیر_اسلایدر = 0,
  سمت_چپ_اسلایدر = 1,
  بالای_اسلایدر = 2,
  سمت_راست_شگفت_انگیز = 3,
  وسط_صفحه = 4,
}

export interface SliderDto {
  creationDate: Date;
  title: string;
  link: string;
  imageName: string;
}
export interface HomeDataDto {
  banners: BannerDto[];
  sliders: SliderDto[];
  latestProduct: ProductCardDto[];
  amazingProducts: ProductCardDto[];
}
