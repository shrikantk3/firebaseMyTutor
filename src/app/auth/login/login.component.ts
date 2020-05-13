import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from '../../app-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  userId:String='';


  constructor(
    private fb:FormBuilder,
    private _router:Router,
    private api:AppServiceService
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
      var id = this.api.authLogin('user', this.loginForm.controls['email'].value, this.loginForm.controls['password'].value);
      this._router.navigate(['user', 'PsvGW9NUH7FnXKt8tH91']);
      console.log("=============>", id);
      
    }else{
      return false;
    }
  }

}
