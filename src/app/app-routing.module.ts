import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';
// import { UserModule } from './user/user.module';
import { AppServiceService } from './app-service.service'

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'auth/login'},
  {path:'auth', loadChildren:'./auth/auth.module#AuthModule'},
  {path:'user', loadChildren:'./user/user.module#UserModule'},
  {path:'**', redirectTo:'auth/not-found'},
];
@NgModule({
  imports:[RouterModule.forRoot(routes,{ enableTracing: true })],
    exports:[RouterModule]
  })


export class AppRoutingModule{
  constructor(private authguard:AppServiceService){

  }
}
