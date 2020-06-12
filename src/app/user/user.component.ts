import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
    selector:'app-user',
    templateUrl:'./user.component.html',
    styleUrls:['./user.component.scss']
})

export class userComponent implements OnInit{

    user = localStorage.getItem('user');
    user_id:string = '';
    constructor(private _router:ActivatedRoute){
        this.user_id = JSON.parse(this.user).uid;
    }

    ngOnInit(){

    }
}