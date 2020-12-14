import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import {
  RoleEnum,
  TestResultCreateRequest,
  TestResultResponse,
  UserDataCreateRequest,
  UserDataLoginRequest,
  UserDataResponse,
} from 'src/interface';

export const testUser: UserDataResponse = {
  name: 'user',
  login: 'user',
  email: 'user@mail.ru',
  role: RoleEnum.User,
  id: 2,
};
export const testAdmin: UserDataResponse = {
  name: 'admin',
  login: 'admin',
  email: 'admin@mail.ru',
  role: RoleEnum.Admin,
  id: 1,
};
export const testResult: TestResultResponse = {
  id: 1,
  userId: 2,
  date: '2020/10/10',
  results: [
    { time: 20, successResult: 20, failResult: 5 },
    { time: 20, successResult: 20, failResult: 5 },
    { time: 20, successResult: 20, failResult: 5 },
    { time: 20, successResult: 20, failResult: 5 },
    { time: 20, successResult: 20, failResult: 5 },
  ],
};
export const testResult2: TestResultResponse = {
  id: 2,
  userId: 2,
  date: '2020/10/10',
  results: [
    { time: 30, successResult: 24, failResult: 1 },
    { time: 30, successResult: 24, failResult: 1 },
    { time: 30, successResult: 24, failResult: 1 },
    { time: 30, successResult: 24, failResult: 1 },
    { time: 30, successResult: 24, failResult: 1 },
  ],
};

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  currentId = 0;

  api = '/api';
  constructor(private http: HttpClient) {}

  register(data: UserDataCreateRequest): Observable<UserDataResponse> {
    return this.http.post(
      `${this.api}/user/create`,
      data
    ) as Observable<UserDataResponse>;
  }

  checkPassword(data: UserDataLoginRequest): Observable<UserDataResponse> {
    return this.http.post(
      `${this.api}/user/checkPassword`,
      data
    ) as Observable<UserDataResponse>;
  }

  saveTestResult(
    data: TestResultCreateRequest
  ): Observable<TestResultResponse> {
    return this.http.post(
      `${this.api}/test/create`,
      data
    ) as Observable<TestResultResponse>;
  }

  getTestResultsByUser(id: number): Observable<TestResultResponse[]> {
    return this.http.get(`${this.api}/test/user/${id}`) as Observable<
      TestResultResponse[]
    >;
  }

  getAllTestResults(): Observable<TestResultResponse[]> {
    return this.http.get(`${this.api}/test`) as Observable<
      TestResultResponse[]
    >;
  }

  getUserLists(): Observable<UserDataResponse[]> {
    return this.http.get(`${this.api}/user`) as Observable<UserDataResponse[]>;
  }
}
