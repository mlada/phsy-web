import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TestResultResponse } from 'src/interface';
import { CurrentStateService } from '../shared/current-state.service';

@Component({
  selector: 'app-view-tests',
  templateUrl: './view-tests.component.html',
  styleUrls: ['./view-tests.component.scss'],
})
export class ViewTestsComponent implements OnInit {
  constructor() {}
  get tests(): BehaviorSubject<TestResultResponse[]> {
    return CurrentStateService.currentUserTests;
  }
  ngOnInit(): void {}
}
