import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserApiProvider {

  urlApi : string;

  constructor(public http: HttpClient) {
    this.urlApi = "https://randomuser.me/api/?results=";
  }

  getUsers(number) {
    return this.http.get(this.urlApi + number);
  }

}
