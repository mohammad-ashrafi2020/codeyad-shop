export interface baseFilterResult<T> {
  entityCount: number;
  currentPage: number;
  pageCount: number;
  startPage: number;
  endPage: number;
  take: number;
  data: T[];
}
