import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RequestsService } from '../shared/requests.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  private subscription: Subscription = new Subscription();
  constructor(private http: RequestsService, private router: Router) {
    this.formGroup = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
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
        .register(this.formGroup.value)
        .pipe(
          catchError((err) => {
            console.log(err);
            return throwError(err);
          })
        )
        .subscribe(() => {
          this.router.navigate(['login']);
        })
    );
  }
}
