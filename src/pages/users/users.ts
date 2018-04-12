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

    this.getUsers(1000);

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
    
    var mapped = this.userList.map(function(e, i) {
      return { index: i, value: e.login.username.toLowerCase() };
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

    this.userList = mapped.map((e) => {
      return this.userList[e.index];
    });


  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.getUsers(10);
    setTimeout(() => {
      refresher.complete();
    }, 1000);
  }

}
