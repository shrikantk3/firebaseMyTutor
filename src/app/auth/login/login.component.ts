import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from '../../app-service.service';
import { AngularFireAuth } from '@angular/fire/auth'
// import { auth } from 'firebase';
import * as firebase from 'firebase/app';
import {userLog} from '../../model/user_model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  userId:String='';
  userData:userLog;

  constructor(
    private fb:FormBuilder,
    private _router:Router,
    private api:AppServiceService,
    private fS:AngularFireAuth
  ) {
    this.loginForm = fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }

  ngOnInit() {

  }
  onSubmit(val){
    if(val.valid){
      // var id = this.api.authLogin('user', this.loginForm.controls['email'].value, this.loginForm.controls['password'].value);
      // this._router.navigate(['user', 'PsvGW9NUH7FnXKt8tH91']);
      // console.log("=============>", id);
    this.fS.auth.signInWithEmailAndPassword(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value).then(response=>{
      console.log("After Login :", response);
      var user = response.user
      console.log(user);
      localStorage.setItem('user', JSON.stringify(user));
      this._router.navigate(['/user', user.uid])
    }).catch(err=>{

    })   
    }else{
      return false;
    }
  }
 googleSignin(){
  let SocialData = new firebase.auth.GoogleAuthProvider();
  // SocialData.addScope('profile');
  // SocialData.addScope('email');
  this.fS.auth.signInWithPopup(SocialData).then((res:any)=>{
    // res = JSON.parse(res.additionalUserInfo.profile);
    var token = res.credential.accessToken
    var user = res.user
    console.log(user);  
    // this.userData.email = user.email;
    // this.userData.name = user.displayName;
    // this.userData.firstName = res.displayName;
    // this.userData.lastname = res.displayName;
    // this.userData.token = token;
    // this.userData.id = res.uid;
    localStorage.setItem('user', JSON.stringify(user));
    this._router.navigate(['/user', user.uid]);
  
  }).catch(err=>{
    console.log('Network Error :', err)
  })
 }
}
