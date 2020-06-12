import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";
import { AppServiceService } from "../../app-service.service";
import { Store } from "@ngrx/store";


@Component({
  selector: 'app-dashlboard',
  templateUrl: './dashlboard.component.html',
  styleUrls: ['./dashlboard.component.scss']
})

export class DashlboardComponent implements OnInit {
userId:String;
coursesList:any = [];
  constructor(
    private _activatedRoute:ActivatedRoute,
    private _api:AppServiceService,
    private _store:Store<any>
  ) {
     this.userId= this._activatedRoute.snapshot.params['id'];
  }
  ngOnInit() {

    // this._store.dispatch({type:'USER_LIST'})
    // this._store.subscribe(res=>{
      
    //   this.coursesList = res.courses;
    //   console.log(this.coursesList);
    // })
    // console.log();
    
    this._api.getData('cources').then(res=>{
        this.coursesList = res;
        console.log('-----------Before ----------->', this.coursesList);

      });
    // console.log(this.coursesList);
  }


  addCourse(){
    let data = {
      active :1, 
      content_id:120164,
      course_id:"cs001262",
      course_name:"Data Scientist",
      course_price:42000,
      createdBy:"092221",
      createdOn:new Date(),
      description:"Data science is an inter-disciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from many structural and unstructured data. Data science is related to data mining, deep learning and big data.",
      duration:16,
      start_at:new Date(),
      teachers:["00921","009421"],
      volume:1
    }
    this._api.addData('cources',data).then(res=>console.log(res));
  }



}
