import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';
import { AppServiceService } from '../../app-service.service'
import { Router } from "@angular/router";
import { AngularFirestore } from '@angular/fire/firestore'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
// @Output theme:Number;
user:any;
notifications:any;
@Output() themeChang = new EventEmitter();
  constructor(
    private _api:AppServiceService,
    private _router:Router,
    private fs:AngularFirestore
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
   }

  ngOnInit() { 
    this._api.getData('notification').then(res=>{
      this.notifications = [res[0].payload.doc.data()];
    });
      console.log('-------------->', this.notifications)
  }
  
  themeChange(val){
    console.log("Send Before:", val);
    this.themeChang.emit(val);
  }
  logoutMe(){
    localStorage.removeItem('user');
    this._router.navigate(['auth/login']);
  }


}
