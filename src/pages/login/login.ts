import { Component } from '@angular/core';
import { NavController, NavParams, App, MenuController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  mode: any = "signIn";

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(false);
  }

  authentification() {
    localStorage.setItem("Token" , "OK");
    this.menuCtrl.enable(true);
    this.appCtrl.getRootNav().push(TabsPage);
  }

}
