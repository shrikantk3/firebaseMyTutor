import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashlboardComponent } from './dashlboard/dashlboard.component';
import { userRouterModule } from './user-router.module';
import { userComponent } from './user.component';
import { ExtraModule } from '../extra/extra.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from "@angular/material/button";
import { AppServiceService } from '../app-service.service';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from "@ngrx/store";
import { userReducers } from "./state/user.reducers";
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material'

@NgModule({
  declarations: [DashlboardComponent,userComponent],
  imports: [
    CommonModule,
    ExtraModule,
    userRouterModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    SharedModule,
    StoreModule.forFeature('courses',userReducers),
    MatButtonModule
  ],
  providers:[AppServiceService]
})
export class UserModule { }
