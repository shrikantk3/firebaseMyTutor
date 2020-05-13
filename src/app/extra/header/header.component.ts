import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
// @Output theme:Number;
@Output() themeChang = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  
  themeChange(val){
    console.log("Send Before:", val);
    this.themeChang.emit(val);
  }


}
