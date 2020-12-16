import { Component, Input, OnInit } from '@angular/core';
import { TestResultData } from 'src/interface';
import { TestResultModel } from '../form-group/form-group';

export enum EffectiveWorkEnum {
  LessThanThirty = 5,
  LessThanThirtyFive = 4,
  LessThanFortyFive = 3,
  LessThanFiftyFive = 2,
  MoreThanFiftySix = 1,
}

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.scss'],
})
export class TestResultComponent implements OnInit {
  @Input() results: TestResultData[] = [];
  effectiveWork = 0;
  degreeOfWorkability = 0;
  mentalStability = 0;
  constructor() {}

  ngOnInit(): void {
    const er =
      (this.results[0].time +
        this.results[1].time +
        this.results[2].time +
        this.results[3].time +
        this.results[4].time) /
      5;
    if (er <= 30) {
      this.effectiveWork = EffectiveWorkEnum.LessThanThirty;
    } else if (er <= 35) {
      this.effectiveWork = EffectiveWorkEnum.LessThanThirtyFive;
    } else if (er <= 45) {
      this.effectiveWork = EffectiveWorkEnum.LessThanFortyFive;
    } else if (er <= 55) {
      this.effectiveWork = EffectiveWorkEnum.LessThanFiftyFive;
    } else if (er >= 56) {
      this.effectiveWork = EffectiveWorkEnum.MoreThanFiftySix;
    }
    this.degreeOfWorkability = this.results[0].time / this.effectiveWork;
    this.mentalStability = this.results[3].time / this.effectiveWork;
  }
}
