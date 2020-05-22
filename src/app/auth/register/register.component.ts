import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loginForm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private fs:AngularFireAuth,
    private _router:Router  
  ) {
    this.loginForm = fb.group({
      email:['', Validators.required],
      password:['', Validators.required],
      re_password:['', Validators.required]
    })
  }

  ngOnInit() {
  }

  signUpFn(val){
    if(val.valid){
      this.fs.auth.createUserWithEmailAndPassword(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value).then((response:any)=>{
        console.log('Sign up :', response);
        this._router.navigate(['user/', response.user.uid]);
        localStorage.setItem('user', response.user);
      }).catch(err=>{
        console.log('Network Error :', err);
        alert(err.message);
      });
    }else{
      return false;
    }
  }

}
