import { Action } from "@ngrx/store";

export interface Course {
    active: Number;
    assignTo:[];
    content_id:Number;
    course_id: String;
    course_name: String;
    course_price: Number;
    createdBy: String;
    createdOn:Date;
    duration: Number;
    start_at: Date
    volume: Number
}

export enum CourseActionType{
        LOAD_COURSE = "[Course] Load Course",
        LOAD_COURSE_SUCCESSFUL = "[Course] Load Course SUCCESSFUL",
        LOAD_COURSE_FAIL = "[Course] Load Course FAIL",
}
