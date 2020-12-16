import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from '../shared/requests.service';
import { FormGroupComponent } from './form-group/form-group.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  @ViewChild('form')
  form!: FormGroupComponent;

  constructor(private http: RequestsService, private router: Router) {}

  ngOnInit(): void {}
  start(): void {
    this.form.start();
  }
  stop(): void {
    this.form.stop();
  }
  save(): void {
    this.http.saveTestResult(this.form.formGroup.testsValue).subscribe(() => {
      this.router.navigate(['view-tests']);
    });
  }
}
