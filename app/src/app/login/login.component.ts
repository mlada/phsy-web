import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RequestsService } from '../shared/requests.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  private subscription: Subscription = new Subscription();
  constructor(private http: RequestsService, private router: Router) {
    this.formGroup = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  submit(): void {
    if (
      this.formGroup.value.login === 'user' &&
      this.formGroup.value.password === 'user'
    ) {
      this.subscription.add(
        this.http.checkPassword(this.formGroup.value).subscribe(() => {
          this.router.navigate(['test']);
        })
      );
    } else {
      this.formGroup.setErrors({loginOrPasswordNotCorrect: true});
    }
  }
}
