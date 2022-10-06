export interface ApiResponse<TData> {
  isSuccess: boolean;
  data: TData;
  metaData: MetaData;
}
export interface MetaData {
  message: string;
  appStatusCode: AppStatusCode;
}
export enum AppStatusCode {
  Success = 1,
  NotFound = 2,
  BadRequest = 3,
  LogicError = 4,
  UnAuthorize = 5,
  ServerError,
}
