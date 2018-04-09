import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http , Headers , RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UserApiProvider {

  urlApi : string;

  constructor(public http: HttpClient) {
    this.urlApi = "https://randomuser.me/api/?results=100";
  }


}
