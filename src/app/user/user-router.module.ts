import { Router, RouterModule, Routes } from '@angular/router';
import { DashlboardComponent } from './dashlboard/dashlboard.component';
import { NgModule } from '@angular/core';
import { userComponent } from './user.component';
import { CourseDetailsComponent } from '../shared/course-details/course-details.component';

const _routes:Routes = [
    {  path:'',  component:userComponent,  
        children:[
            { path:':id', component:DashlboardComponent  },
            { path:':id/course/:id', component:CourseDetailsComponent  }
        ]
    }    
];

@NgModule({
    imports:[RouterModule.forChild(_routes)],
    exports:[RouterModule]
})
export class userRouterModule{}