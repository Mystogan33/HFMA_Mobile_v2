import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserApiProvider } from '../../providers/user-api/user-api';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  userList: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userApi : UserApiProvider) {

    this.getUsers();

  }

  getUsers() {

    this.userApi.getUsers().subscribe((data) => {
      this.userList = data['results'];
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.info("Call for users API completed");
      })

  }

}
