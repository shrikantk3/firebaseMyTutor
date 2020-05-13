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

    this._store.dispatch({type:'USER_LIST'})
    this._store.subscribe(res=>{
      
      this.coursesList = res.courses;
      console.log(this.coursesList);
    })
    // console.log(this.userId);
    // this._api.get('cources').then(res=>{
    //   this.coursesList = res;
    // }).catch(err=>{
    //   console.log(err)
    // }) 
  }

}
