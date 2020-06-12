import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AppServiceService } from "../../app-service.service";
import { FormGroup, FormBuilder } from "@angular/forms";
// import { UserName } from "../user-name.directive";


@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  // @ViewChild('userName', {static:true}) userEl:ElementRef;
  @Input() course_id:string = '';
  user:any;
  comments:any;
  userData:any;
  
  ngCommnetfrm:FormGroup;
  constructor(
    private _api:AppServiceService,
    private _fb:FormBuilder
  ) { 
    this.user = JSON.parse(localStorage.getItem('user'));
    this.ngCommnetfrm = this._fb.group({
      text:[''],
      userid:['']
    })
  }

  ngOnInit() {
    let  url =`/comments/${this.course_id}/comment_list`;
    this._api.getData(url).then(res=>{
    console.log('---------------comments-------------->',res)
      this.comments = res;
      this.getUserDetails(this.comments.userid);
    });
  }
  async getUserDetails(id){
   
    await this._api.getDocDetails('user', id).then(res=>{
      this.userData = [res[0].payload.doc.data()];
    })
    return this.userData;
  }

  onCommentSubmit(val){
    let  url =`/comments/${this.course_id}/comment_list`;
    this.ngCommnetfrm.controls['userid'].setValue(this.user.uid);
    console.log('----------------------------->', val)
    if(val.valid){
     this._api.addData(url, this.ngCommnetfrm.value).then(res=>{
        console.log('------------------------------------>',res);
     }).catch(err=>{
       console.info(err)
     })
    }else{
      return false;
    }
    // console.log(this.user, this.ngCommnetfrm);
  }

}
