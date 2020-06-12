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
  
  accountSid = 'AC6daa4b772bc8b36c49b977611213bb29'; // Your Account SID from www.twilio.com/console
  authToken = 'cc9499cbe7950c06513d26f6d40399e6';
  client:any;

  course:any;
  course_id:String='';
  comments:any;
  constructor(
    private _store:Store<any>,
    private _routes:ActivatedRoute,
    private _api:AppServiceService,
    // private _twilio:Twilio
  ) { 
      // this.client = new _twilio(this.accountSid, this.authToken);
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
  //   this._api.getDocDetails('teachers', 'vqDjPWWrVkr3dwdjCzA3').then(res=>{
  //     data=(res?null:res);
  //  });
   return data;
  }

}
