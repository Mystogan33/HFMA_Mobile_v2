import { Component } from '@angular/core';
import { NavController, App, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ProfilPage } from '../profil/profil';
import { OtherEventsPage } from '../other-events/other-events';
import { MyEventsPage } from '../my-events/my-events';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  events: Array<any>;

  myEvents: any;
  otherEvents: any;

  tab1: any;
  tab2: any;

  constructor(public navCtrl: NavController, public appCtrl: App, public toastCtrl: ToastController) {

    this.tab1 = OtherEventsPage;
    this.tab2 = MyEventsPage;

    if(!localStorage.getItem("Token")) {
      this.appCtrl.getRootNavById().push(LoginPage);
    } else this.getEvents();


  }

  getEvents() {
    this.events = [
     {title: "Réunion sur l'énergie renouvelable", date: "13 Juillet 2018", logo: "assets/imgs/event1Logo.jpg",
      image: "assets/imgs/event1.jpg", description: "My style is unique and random. But I think it's important that it still makes sense.",
      tarif: "Gratuit", lieu: "Palais des expositions, Bordeaux", association: "Earth Green", likes: 2, comments: 3, published: 10},

     {title: "Concert de Lorenzo", date: "14 Juillet 2018", logo: "assets/imgs/event2Logo.png",
      image: "assets/imgs/event2.jpg", description: "I cry at random things, like a flower, or someone giving me a present, or my sister giving me a nice hug.",
      tarif: "23€", lieu: "Rock School Barbey, Bordeaux", association: "Rockschool Barbey", likes: 34, comments: 10, published: 6},

     {title: "Concert de Metallica", date: "15 Juillet 2018", logo: "assets/imgs/event3Logo.jpg", image: "assets/imgs/event3.jpg",
     description: "Goals transform a random walk into a chase.", tarif: "100€", lieu: "Bordeaux Arena, Bordeaux", association: "Metallica Fanclub", likes: 100, comments: 7, published: 8
     },

     {title: "Cocktail de rencontre des entreprises du web", date: "16 Juillet 2018", logo: "assets/imgs/event4Logo.png", image: "assets/imgs/event4.jpg",
     description: "Creativity is the process of having original ideas that have value. It is a process; it's not random.", tarif: "Gratuit",
     lieu: "Ingesup Bordeaux, Bordeaux", association: "Web for All", likes: 20, comments: 4, published: 1}
   ];
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

    this.appCtrl.getRootNavById().push(LoginPage);
  }

}
