import { SeoData } from "../SeoData";

export interface CategoryDto {
  id: number;
  creationDate: Date;
  title: string;
  slug: string;
  imageName: string;
  seoData: SeoData;
  childs: ChildCategoryDto[];
}

export interface ChildCategoryDto {
  id: number;
  creationDate: Date;
  title: string;
  slug: string;
  seoData: SeoData;
  parentId: number;
  imageName: string;
  childs: SeconderyChildCategoryDto[];
}
export interface SeconderyChildCategoryDto {
  id: number;
  creationDate: Date;
  title: string;
  slug: string;
  imageName: string;
  seoData: SeoData;
  parentId: number;
}
