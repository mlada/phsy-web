import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export const testUser  = {
  name: 'user',
  login: 'user',
  email: 'user@mail.ru',
  role: 1,
  id: 2
};
export const testAdmin  = {
  name: 'admin',
  login: 'admin',
  email: 'admin@mail.ru',
  role: 0,
  id: 1
};
export const testResult  = {
  id: 1,
  value: 23,
  interpretation: 'qweqweqwrkslsf',
  userId: 2,
  date: '2020/10/10'
};
export const testResult2  = {
  id: 2,
  value: 21,
  interpretation: 'asdasdas',
  userId: 2,
  date: '2020/10/9'
};

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  api = 'localhost:5100';
  constructor(private http: HttpClient) { }

  register(data: any): Observable<any> {
    return of(testUser);
  }

  checkPassword(data: any): Observable<any>{
    return of(testUser);
  }

  saveTestResults(id: number): Observable<any>{
    return of(testResult);
  }

  getTestResult(id: number): Observable<any>{
    return of(testResult);
  }

  getTestResults(): Observable<any>{
    return of([testResult, testResult2]);
  }

  getUserLists(): Observable<any>{
    return of([testUser]);
  }

}
