import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
    this.subscription.add(
      this.http
        .checkPassword(this.formGroup.value)
        .pipe(
          catchError((err) => {
            console.log(err);
            this.formGroup.setErrors({ loginOrPasswordNotCorrect: true });
            return throwError(err);
          })
        )
        .subscribe(() => {
          this.router.navigate(['test']);
        })
    );
  }
}
