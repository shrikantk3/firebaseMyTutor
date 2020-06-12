import { Directive, Input, ElementRef } from '@angular/core';
import { AppServiceService } from "../app-service.service";

@Directive({
  selector: '[appUserFullName]'
})
export class UserFullNameDirective {

  userData:any;
  // @ViewChild('init',{static:true})userText:ElementRef;
  @Input() appUserFullName:string = '';
  constructor(
      private el:ElementRef,
      private _api:AppServiceService
      
  ){
    this.getUserDetails(this.appUserFullName).then(res=>{  
      this.el.nativeElement.innerHTML = res;
    });
  }
  // ngOnInit(){ }
  async getUserDetails(id){
      await this._api.getDocDetails('user', 'LE0SVpS6aDaLlBFIbDoPIDUxoQb2').then(res=>{
        this.userData = res;
        // console.log("---------mile gyaaa ye--------------->", res);
      });
      return `${this.userData.firstname} ${this.userData.lastname}`;
  }

}
