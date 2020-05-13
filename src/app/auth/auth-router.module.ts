import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { NgModule } from '@angular/core';

const _routes:Routes = [    
    {path:'login', component:LoginComponent },
    {path:'register', component:RegisterComponent },
    {path:'forgot-password', component:ForgotPasswordComponent },
    {path:'not-found', component:ErrorpageComponent },

];

@NgModule({
    imports:[RouterModule.forChild(_routes)],
    exports:[RouterModule]
})

export class  authRouterModule{} 