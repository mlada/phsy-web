import { OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';

export interface TestResultModel {
  time: number;
  successResult: number;
  failResult: number;
  isStarted: boolean;
  isFinished: boolean;
}
export class TestFormGroup extends FormGroup {
  constructor() {
    super({
      time: new FormControl(0, []),
      successResult: new FormControl(0, []),
      failResult: new FormControl(0, []),
      isStarted: new FormControl(false, []),
      isFinished: new FormControl(false, []),
    });
  }
}
export class TestsFormGroup extends FormGroup {
  constructor() {
    super({
      tests: new FormArray([], []),
    });
  }
  public get tests(): FormArray {
    return this.controls.tests as FormArray;
  }
  appendControl(): void {
    this.tests.push(new TestFormGroup());
  }
  setValueForTest(i: number, value: TestResultModel): void {
    this.tests.at(i).patchValue(value, { emitEvent: false });
  }
}
