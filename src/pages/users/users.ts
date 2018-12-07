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
    this.getUsers(100);
  }

  getUsers(number) {
    this.userApi.getUsers(number).subscribe((data) => {
      this.userList = data['results'];
      this.sortData();
    },
    (error) => {
      console.log(error);
    },
    () => {
      console.info("Call for users API completed");
    })
  }

  sortData() {
    var mapped = this.userList.map(function(user, index) {
      return { index: index, value: user.login.username.toLowerCase() };
    })

    mapped.sort(function(a, b) {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      return 0;
    });

    this.userList = mapped.map((user) => {
      return this.userList[user.index];
    });

    console.info(this.userList)

  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.getUsers(100);
    setTimeout(() => {
      refresher.complete();
    }, 1000);
  }

}
