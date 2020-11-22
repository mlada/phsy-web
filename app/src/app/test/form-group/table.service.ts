import { Injectable } from '@angular/core';
import { TestResultModel } from './form-group';
import { getMinOfArray, getRandomInt } from './helper';
export const elements = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
];
@Injectable({
  providedIn: 'root',
})
export class TableService {
  choosedElements: number[] = [];
  successElements: number[] = [];
  errorElements: number[] = [];
  elements: number[] = elements;
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
  randomizeArray(): void {
    while (this.elements.length !== 0) {
      const ind = getRandomInt(this.elements.length);
      const elem = this.getRandomElement(ind);
      this.copyElements.push(elem);
    }
    this.elements = this.copyElements;
  }

  getRandomElement(i: number): number {
    const elem = this.elements[i];
    console.log(elem);
    this.elements = this.elements.filter((e) => e !== elem);
    return elem;
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
    this.elements = elements;
    this.copyElements = [];
    return results;
  }
}
