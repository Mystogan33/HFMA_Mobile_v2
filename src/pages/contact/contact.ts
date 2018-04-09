import { Component } from '@angular/core';
import { NavController, App, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ProfilPage } from '../profil/profil';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  chatters : any = [
    {
      nom: "Gamin",
      prenom: "Nicolas",
      pseudo: "Althalux",
      birth: "06/12/1993",
      ville: "Bordeaux",
      mail: "nicolas.gamin@gmail.com",
      image: "assets/imgs/Nicolas.jpg",
      status: "Président"
    },
    {
      nom: "Proust",
      prenom: "Loïc",
      pseudo: "ChopperLover",
      birth: "01/01/1994",
      ville: "Bordeaux",
      mail: "loic.proust@gmail.com",
      image: "assets/imgs/Loic.jpg",
      status: "Membre"
    },
    {
      nom: "Gassiot",
      prenom: "Lucas",
      pseudo: "Tikis",
      birth: "01/02/1994",
      ville: "Bordeaux",
      mail: "lucas.gassiot@gmail.com",
      image: "assets/imgs/Lucas.jpg",
      status: "Membre"
    },
    {
      nom: "Orgambide",
      prenom: "Camille",
      pseudo: "FashionLicorne",
      birth: "01/03/1992",
      ville: "Bordeaux",
      mail: "camille.orgambide@gmail.com",
      image: "assets/imgs/Camille.jpg",
      status: "Membre"
    },
  ]

  constructor(public navCtrl: NavController, public appCtrl: App, public toastCtrl: ToastController) {

    if(!localStorage.getItem("Token")) {
      this.appCtrl.getRootNav().push(LoginPage);
    }

  }

  showChat() {
    alert("Chat");
  }

  goToProfil(userProfil) {
    this.navCtrl.push(ProfilPage, {profile: userProfil})
  }

  showProfil() {
    this.navCtrl.push(ProfilPage);
  }

  deconnexion(position) {
    localStorage.removeItem("Token");
    let toast = this.toastCtrl.create({
      message: "Déconnexion reussie. Vous allez être redirigé vers l'authentification...",
      duration: 2000,
      position: position
    });

    toast.present(toast);

    this.appCtrl.getRootNav().push(LoginPage);
  }

}
