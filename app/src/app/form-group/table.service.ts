import { Injectable } from '@angular/core';
import { TestResultModel } from './form-group';
import { getMinOfArray, getRandomInt } from './helper';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  choosedElements: number[] = [];
  successElements: number[] = [];
  errorElements: number[] = [];
  elements: number[] = [];
  copyElements: number[] = [];
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
    if (num === 0 || num > 25 || this.elements.some((v) => v === num)) {
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
  }
  stop(): TestResultModel {
    const results = {
      successResult: this.successElements.length,
      failResult: this.errorElements.length,
      time: 0,
      isFinished: true,
      isStarted: true,
    };
    this.choosedElements = [];
    this.successElements = [];
    this.errorElements = [];
    this.elements = [];
    this.copyElements = [];
    return results;
  }
}
