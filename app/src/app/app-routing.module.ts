import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegistrationComponent } from './registration/registration.component';
import { TestComponent } from './test/test.component';
import { ViewTestsComponent } from './view-tests/view-tests.component';

const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'test',
        component: TestComponent,
      },
      {
        path: 'view-tests',
        component: ViewTestsComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: '**',
        redirectTo: 'test',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'registration',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
