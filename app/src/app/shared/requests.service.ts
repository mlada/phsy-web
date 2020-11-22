import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Backend } from './Backend';
import { tap } from 'rxjs/operators';

export const testUser: Backend.UserDataResponse = {
  name: 'user',
  login: 'user',
  email: 'user@mail.ru',
  role: Backend.RoleEnum.User,
  id: 2,
};
export const testAdmin: Backend.UserDataResponse = {
  name: 'admin',
  login: 'admin',
  email: 'admin@mail.ru',
  role: Backend.RoleEnum.Admin,
  id: 1,
};
export const testResult: Backend.TestResultResponse = {
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
export const testResult2: Backend.TestResultResponse = {
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

  register(
    data: Backend.UserDataCreateRequest
  ): Observable<Backend.UserDataResponse> {
    return of(testUser);
  }

  checkPassword(
    data: Backend.UserDataLoginRequest
  ): Observable<Backend.UserDataResponse> {
    return of(testUser).pipe(
      tap((user) => {
        this.currentId = user.id;
      })
    );
  }

  saveTestResult(
    data: Backend.TestResultCreateRequest
  ): Observable<Backend.TestResultResponse> {
    return of(testResult);
  }

  getTestResultsByUser(id: number): Observable<Backend.TestResultResponse[]> {
    return of([testResult, testResult2]);
  }

  getAllTestResults(): Observable<Backend.TestResultResponse[]> {
    return of([testResult, testResult2]);
  }

  getUserLists(): Observable<Backend.UserDataResponse[]> {
    return of([testUser]);
  }
}
