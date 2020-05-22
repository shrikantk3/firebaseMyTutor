import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';
import { AppServiceService } from '../../app-service.service'
import { Router } from "@angular/router";

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
    private api:AppServiceService,
    private _router:Router
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
   }

  ngOnInit() {
     this.api.get("notification").then(res=>{
      this.notifications = res;
    }).catch(err=>{
      this.notifications = ['Error in notification'];
    });
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
