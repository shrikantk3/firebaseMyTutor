import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AppServiceService } from './app-service.service';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from './extra/header/header.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'MyTutor';
  items: any = [];
  mydata: any;
  theme:string="theme3";
  // @ViewChild(HeaderComponent) childReference;
  constructor(
    private fireApi: AppServiceService
  ) {
    // this.items = this.fireApi.get('user');
  }
  ngOnInit() {
    // this.mydata = this.fireApi.addData('user', { "active": 1, "email": "shri@gmail.com", "firstname": "shk", "lastname": "kant", "phone": "9876512121", "rate": "5", "userid": "00112", "username": "shri" });
    // console.log("Add Data:", this.mydata);
  }
  ngAfterViewInit(){
    // this.theme = this.childReference.HeaderComponent;
  }
  getchangeTheme(val){
    console.log("Event Emitter :", val);
  }
}
