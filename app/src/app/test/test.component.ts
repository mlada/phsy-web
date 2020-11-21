import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroupComponent } from '../form-group/form-group.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  @ViewChild('form')
  form!: FormGroupComponent;

  constructor() {}

  ngOnInit(): void {}
  start(): void {
    this.form.start();
  }
  stop(): void {
    this.form.stop();
  }
}
