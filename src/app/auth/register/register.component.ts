import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private fb:FormBuilder) {
    this.loginForm = fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }

  ngOnInit() {
  }

}
