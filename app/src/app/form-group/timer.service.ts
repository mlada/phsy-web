import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  time = 0;
  timer: any;
  constructor() {
    console.log('init');
  }
  start(): void {
    this.timer = setInterval(() => this.time++, 1000);
  }
  pause(): void {
    clearInterval(this.timer);
  }
  stop(): number {
    clearInterval(this.timer);
    const time = this.time;
    this.time = 0;
    return time;
  }
}
