import { Component, OnInit } from '@angular/core';
import { TestsFormGroup } from './form-group';
import { TableService } from './table.service';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent implements OnInit {
  formGroup: TestsFormGroup = new TestsFormGroup();
  currentTestNumber = 0;

  constructor(public table: TableService, public timer: TimerService) {}

  ngOnInit(): void {
    this.init();
  }
  init(): void {
    for (let i = 1; i <= 25; i++) {
      this.table.appendNumberToArray();
    }
  }
  start(): void {
    this.formGroup.appendControl();
    this.formGroup.setValueForTest(this.currentTestNumber, {
      isFinished: false,
      isStarted: true,
      time: 0,
      successResult: this.table.successElements.length,
      failResult: this.table.errorElements.length,
    });
    this.init();
    this.timer.start();
  }
  choose(elem: number): void {
    this.table.choose(elem);
    if (this.table.copyElements.length === 0) {
      this.stop();
    }
  }
  stop(): void {
    const results = this.table.stop();
    const time = this.timer.stop();
    this.formGroup.setValueForTest(this.currentTestNumber, {
      ...results,
      time,
    });
    this.currentTestNumber++;
  }
}
