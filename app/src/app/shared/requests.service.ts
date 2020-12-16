import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import {
  TestResultCreateRequest,
  TestResultResponse,
  UserDataCreateRequest,
  UserDataLoginRequest,
  UserDataResponse,
} from 'src/interface';
import { TestResultModel } from '../test/form-group/form-group';
import { CurrentStateService } from './current-state.service';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  api = '/api';
  constructor(private http: HttpClient) {}

  register(data: UserDataCreateRequest): Observable<UserDataResponse> {
    return this.http.post(
      `${this.api}/user/create`,
      data
    ) as Observable<UserDataResponse>;
  }

  checkPassword(data: UserDataLoginRequest): Observable<TestResultResponse[]> {
    return (this.http.post(
      `${this.api}/user/checkPassword`,
      data
    ) as Observable<UserDataResponse>).pipe(
      switchMap((user) => {
        CurrentStateService.currentUser.next(user);
        return this.getTestResultsByUser(user.id);
      })
    );
  }

  saveTestResult(data: TestResultModel[]): Observable<TestResultResponse[]> {
    const model: TestResultCreateRequest = {
      date: new Date().toISOString(),
      userId: 1,
      results: JSON.stringify(
        data.map((test) => ({
          time: test.time,
          success: test.successResult,
          fail: test.failResult,
        }))
      ),
    };
    return (this.http.post(`${this.api}/test/create`, {
      ...model,
    }) as Observable<TestResultResponse[]>).pipe(
      tap((res) => {
        CurrentStateService.currentUserTests.next(res);
      })
    );
  }

  getTestResultsByUser(id: number): Observable<TestResultResponse[]> {
    return (this.http.get(`${this.api}/test/user/${id}`) as Observable<
      TestResultResponse[]
    >).pipe(
      tap((res) => {
        CurrentStateService.currentUserTests.next(res);
      })
    );
  }

  getAllTestResults(): Observable<TestResultResponse[]> {
    return (this.http.get(`${this.api}/test`) as Observable<
      TestResultResponse[]
    >).pipe();
  }

  getUserLists(): Observable<UserDataResponse[]> {
    return this.http.get(`${this.api}/user`) as Observable<UserDataResponse[]>;
  }
}
