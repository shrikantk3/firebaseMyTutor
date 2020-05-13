import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from "../../app-service.service";

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  course:any;
  course_id:String='';
  constructor(
    private _store:Store<any>,
    private _routes:ActivatedRoute,
    private _api:AppServiceService
  ) { 
    this.course_id = this._routes.snapshot.params['id'];
    this._api.getDocDetails('cources', this.course_id).then(res=>{
      this.course = res;
    });
  }

  ngOnInit() {
    
    // console.log('============c==> ',this.course_id)
    
    // this._store.dispatch({type:'USER_LIST'});
    // this._store.subscribe(res =>{
    //   console.log("COURSE LIST:", res.courses[0], this.course_id);
    //    this.course = res.courses[0].filter(items=>{
    //      if(items.course_id == this.course_id){
    //         return items;
    //     } 
    //   })
    // })

  }

  getTeacherDetails(){
   let data;
    this._api.getDocDetails('teachers', 'vqDjPWWrVkr3dwdjCzA3').then(res=>{
      data=(res?null:res);
   });
   return data;
  }

}
