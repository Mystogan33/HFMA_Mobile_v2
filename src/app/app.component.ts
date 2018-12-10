import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { trigger, style, transition, animate, keyframes, query, stagger, state } from '@angular/animations';

import { TabsPage } from '../pages/tabs/tabs';
import { UsersPage } from '../pages/users/users';
import { AssociationsPage } from '../pages/associations/associations';

@Component({
  templateUrl: 'app.html'
  })
  export class MyApp {

    @ViewChild(Nav) nav: Nav;

    rootPage:any = TabsPage;
    itemsMenu: any;
    associations: any;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
      platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
        this.initList();
        this.getAssociations();
      });
    }

    openPage(page, index) {

      if(page.type != 'push') {
        this.nav.setRoot(page.component);
      } else {
        this.nav.push(page.component);
      }
    }

    getAssociations() {
      this.associations = [
        {name: "Asso1", picture: "assets/imgs/asso1.png"},
        {name: "Asso2", picture: "assets/imgs/asso2.png"},
        {name: "Asso3", picture: "assets/imgs/asso3.png"},
        {name: "Asso4", picture: "assets/imgs/asso4.png"},
        {name: "Asso5", picture: "assets/imgs/asso5.png"},
        {name: "Asso6", picture: "assets/imgs/asso6.png"},
        {name: "Asso7", picture: "assets/imgs/asso7.png"},
        {name: "Asso8", picture: "assets/imgs/asso8.png"}
      ]
    }

    filterAsso(ev: any) {
      // Reset items back to all of the items
      this.getAssociations();

      // set val to the value of the searchbar
      let val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.associations = this.associations.filter((asso) => {
          return (asso.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }

    initList() {
      this.itemsMenu = [
        {description: 'Rechercher une association', component: AssociationsPage, type: 'push', selected: false},
        {description: 'Rechercher un utilisateur', component: UsersPage, type: 'push', selected: false}
      ];
    }

  }
