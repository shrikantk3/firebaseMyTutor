import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { MatCardModule } from '@angular/material/card';
import { FullWidthDirective } from './full-width.directive';
import { HttpClientModule } from '@angular/common/http';
import { howler } from 'howler';
import { CommentListComponent } from './comment-list/comment-list.component'
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { UserName } from "./user-name.directive";
import { UserFullNameDirective } from './user-full-name.directive'



@NgModule({
  declarations: [CourseDetailsComponent, FullWidthDirective, CommentListComponent, UserName, UserFullNameDirective],
  imports: [
    CommonModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule, FormsModule
  ],
  exports:[CourseDetailsComponent, FullWidthDirective, CommentListComponent, UserName]
})
export class SharedModule { }
