import { Component } from '@angular/core';
import { NavController, NavParams,  App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  mode: any = "signIn";

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  authentification() {
    localStorage.setItem("Token" , "OK");
    this.appCtrl.getRootNav().push(TabsPage);
  }

}
