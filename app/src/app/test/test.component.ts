import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentStateService } from '../shared/current-state.service';
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

  ngOnInit(): void {
    if (!!CurrentStateService.currentUser.value) {
      CurrentStateService.currentUser.next({ id: 1 } as any);
    }
    console.log(CurrentStateService.currentUser.value);
  }
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
