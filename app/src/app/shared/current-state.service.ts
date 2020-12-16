import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TestResultResponse, UserDataResponse } from 'src/interface';

@Injectable({
  providedIn: 'root',
})
export class CurrentStateService {
  static currentUser: BehaviorSubject<UserDataResponse> = new BehaviorSubject(
    null as any
  );
  static currentUserTests: BehaviorSubject<
    TestResultResponse[]
  > = new BehaviorSubject([] as any);
  constructor() {}
}
