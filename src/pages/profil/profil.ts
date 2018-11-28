import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, App } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  isEdit: any = false;
  editable: boolean = false;

  mainProfil: any = {"image": "assets/imgs/avatar.jpg", "pseudo": "Mystogan No", "nom": "GAY", "prenom": "Valentin", "birth": "06/12/1993", "ville": "Bordeaux", "mail": "mystogan40@gmail.com"};
  profil: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public appCtrl: App) {

    if(!localStorage.getItem("Token")) {
      this.appCtrl.getRootNavById().push(LoginPage);
    } else {
      let isProfil = this.navParams.get('profile');
      if(!isProfil) {
        this.profil = this.mainProfil;
        this.editable = true;
      } else {
        this.profil = isProfil;
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

  showProfil() {
    if(this.profil == this.mainProfil) this.navCtrl.pop();
    this.navCtrl.push(ProfilPage);
  }

  editer() {
    this.isEdit = !this.isEdit;
  }

  save() {
    this.isEdit = !this.isEdit;
  }

  deconnexion(position) {
    localStorage.removeItem("Token");
    let toast = this.toastCtrl.create({
      message: "Déconnexion reussie. Vous allez être redirigé vers l'authentification...",
      duration: 2000,
      position: position
    });

    toast.present(toast);

    this.appCtrl.getRootNavById().push(LoginPage);
  }

}
