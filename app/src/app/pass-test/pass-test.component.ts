import { Component, OnInit } from '@angular/core';
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'app-pass-test',
  templateUrl: './pass-test.component.html',
  styleUrls: ['./pass-test.component.scss'],
})
export class PassTestComponent implements OnInit {
  constructor() {}
  testQuestionQuantity = 30;
  elements: number[] = [];
  copyElements: number[] = [];
  choosedElements: number[] = [];
  successElements: number[] = [];
  errorElements: number[] = [];
  isStarted = false;
  isFinished = false;
  timerId: any;
  maxTime = 120;
  currentTime = 120;

  ngOnInit(): void {
    for (let i = 1; i <= this.testQuestionQuantity; i++) {
      this.appendNumberToArray();
    }
  }
  isChoosen(elem: number): boolean {
    return this.choosedElements.some((v) => v === elem);
  }
  isSuccessed(elem: number): boolean {
    return this.successElements.some((v) => v === elem);
  }
  isErrored(elem: number): boolean {
    return this.errorElements.some((v) => v === elem);
  }
  appendNumberToArray(): void {
    const num = getRandomInt(100);
    if (this.elements.some((v) => v === num)) {
      this.appendNumberToArray();
    } else {
      this.elements.push(num);
    }
    this.copyElements = this.elements;
  }
  choose(elem: number): void {
    this.choosedElements.push(elem);
    if (getMinOfArray(this.copyElements) === elem) {
      this.successElements.push(elem);
    } else {
      this.errorElements.push(elem);
    }
    this.copyElements = this.copyElements.filter((el) => el !== elem);
    if (this.copyElements.length === 0) {
      this.finish();
      clearInterval(this.timerId);
    }
  }
  finish(): void {
    this.isFinished = true;
  }
  start(): void {
    this.isStarted = true;
    this.timerId = setInterval(() => this.currentTime--, 1000);

    // остановить вывод через 5 секунд
    setTimeout(() => {
      if (!this.isFinished) {
        this.finish();
      }
      return this.timerId ? clearInterval(this.timerId) : null;
    }, this.maxTime * 1000);
  }
}

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}
function getMinOfArray(numArray: number[]): number {
  console.log(Math.min.apply(null, numArray));
  return Math.min.apply(null, numArray);
}
