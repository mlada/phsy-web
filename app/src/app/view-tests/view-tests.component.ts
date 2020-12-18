import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TestResultResponse } from 'src/interface';
import { CurrentStateService } from '../shared/current-state.service';
import { RequestsService } from '../shared/requests.service';

@Component({
  selector: 'app-view-tests',
  templateUrl: './view-tests.component.html',
  styleUrls: ['./view-tests.component.scss'],
})
export class ViewTestsComponent implements OnInit {
  constructor(private http: RequestsService) {}
  get tests(): BehaviorSubject<TestResultResponse[]> {
    return CurrentStateService.currentUserTests;
  }
  ngOnInit(): void {
    if (this.tests.value?.length === 0) {
      this.http.getTestResultsByUser(1).subscribe();
    }
    console.log(CurrentStateService.currentUser.value);
  }
}
