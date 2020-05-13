import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable()

export class SahredServices {
    constructor(private _http:HttpClient){}
    courseDetails(id){
        this._http.get('')
    }
}