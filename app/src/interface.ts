export interface UserDataCreateRequest {
  name: string;
  login: string;
  email: string;
  password: string;
}
export interface UserDataLoginRequest {
  login: string;
  password: string;
}
export interface UserDataResponse {
  name: string;
  login: string;
  email: string;
  role: RoleEnum;
  id: number;
}
export enum RoleEnum {
  Admin = 0,
  User = 1,
}
export interface TestResultCreateRequest {
  userId: string;
  results: TestResultData[];
  date: string;
}
export interface TestResultData {
  time: number;
  successResult: number;
  failResult: number;
}
export interface TestResultResponse {
  id: number;
  userId: number;
  results: TestResultData[];
  date: string;
}
