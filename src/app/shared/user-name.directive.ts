import {Directive, ElementRef, Renderer2, ViewChild, OnInit, Output,Input } from '@angular/core';
import { AppServiceService } from "../app-service.service";

@Directive({
    selector:'username'
})

export class UserName implements OnInit{
    userData:any;
    // @ViewChild('init',{static:true})userText:ElementRef;
    @Input('username') id:string = '';
    constructor(
        private el:ElementRef, 
        private rd2:Renderer2,
        private _api:AppServiceService
        
    ){
        this.el.nativeElement.value = this.userData.name;
    }
    ngOnInit(){ }
    async getUserDetails(id){
   
        await this._api.getDocDetails('user', id).then(res=>{
          this.userData = [res[0].payload.doc.data()];
        })
        return this.userData;
      }
}