import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { authRouterModule } from './auth-router.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent, ErrorpageComponent],
  imports: [
    CommonModule,
    authRouterModule,
    
    ReactiveFormsModule
  ]
})
export class AuthModule { }
