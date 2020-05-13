import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { MatCardModule } from '@angular/material/card';
import { FullWidthDirective } from './full-width.directive';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [CourseDetailsComponent, FullWidthDirective],
  imports: [
    CommonModule,
    MatCardModule,
    HttpClientModule
  ],
  exports:[CourseDetailsComponent, FullWidthDirective]
})
export class SharedModule { }
