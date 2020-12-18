import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { TestResultData } from 'src/interface';

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
  public get testsResults(): TestResultData[] {
    return this.testsValue?.map((test) => ({
      time: test.time,
      fail: test.failResult,
      success: test.successResult,
    }));
  }
  public get testsValue(): TestResultModel[] {
    return this.tests.value as TestResultModel[];
  }
  appendControl(): void {
    this.tests.push(new TestFormGroup());
    console.log(this.tests);
  }
  setValueForTest(i: number, value: TestResultModel): void {
    this.tests.at(i).patchValue(value, { emitEvent: false });
  }
  getValueForTest(i: number): TestResultModel {
    return this.tests.at(i).value;
  }
}
