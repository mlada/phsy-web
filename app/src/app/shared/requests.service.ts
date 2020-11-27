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
  workEfficiency: 1,
  degreeOfWorkability: 0.5,
  mentalStability: 0.6,
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
  workEfficiency: 1,
  degreeOfWorkability: 0.5,
  mentalStability: 0.6,
};

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  currentId = 0;

  api = 'localhost:5100';
  constructor(private http: HttpClient) {}

  register(data: UserDataCreateRequest): Observable<UserDataResponse> {
    return of(testUser);
  }

  checkPassword(data: UserDataLoginRequest): Observable<UserDataResponse> {
    return of(testUser).pipe(
      tap((user) => {
        this.currentId = user.id;
      })
    );
  }

  saveTestResult(
    data: TestResultCreateRequest
  ): Observable<TestResultResponse> {
    return of(testResult);
  }

  getTestResultsByUser(id: number): Observable<TestResultResponse[]> {
    return of([testResult, testResult2]);
  }

  getAllTestResults(): Observable<TestResultResponse[]> {
    return of([testResult, testResult2]);
  }

  getUserLists(): Observable<UserDataResponse[]> {
    return of([testUser]);
  }
}
