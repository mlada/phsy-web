import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { TestResultComponent } from './test/test-result/test-result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { TestInfoComponent } from './test/test-info/test-info.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InfoPanelComponent } from './test/info-panel/info-panel.component';
import { FormGroupComponent } from './test/form-group/form-group.component';
import { RegistrationComponent } from './registration/registration.component';
import { MainComponent } from './main/main.component';
import { ViewTestsComponent } from './view-tests/view-tests.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserListComponent,
    TestResultComponent,
    TestComponent,
    TestInfoComponent,
    InfoPanelComponent,
    FormGroupComponent,
    RegistrationComponent,
    MainComponent,
    ViewTestsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
