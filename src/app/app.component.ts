import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html',
  animations: [
    trigger('menuItems', [
      transition('void => *', [

        query(':enter', style({ opacity: 0}), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateX(-75%)', offset: 0}),
            style({opacity: 0.5, transform: 'translateX(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateX(0)', offset: 1.0}),
          ]))]), {optional: true})
          ])
        ])
      ]
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
          this.refreshList();
          this.getAssociations();
        });
      }

      openPage(page) {
        this.nav.setRoot(page.component);
      }

      getAssociations() {
        this.associations = [
          {picture: "assets/imgs/asso1.png"},
          {picture: "assets/imgs/asso2.png"},
          {picture: "assets/imgs/asso3.png"},
          {picture: "assets/imgs/asso4.png"},
          {picture: "assets/imgs/asso5.png"},
          {picture: "assets/imgs/asso6.png"},
          {picture: "assets/imgs/asso7.png"},
          {picture: "assets/imgs/asso8.png"},
          {picture: "assets/imgs/asso1.png"},
          {picture: "assets/imgs/asso2.png"},
          {picture: "assets/imgs/asso3.png"},
          {picture: "assets/imgs/asso4.png"},
          {picture: "assets/imgs/asso5.png"},
          {picture: "assets/imgs/asso6.png"},
          {picture: "assets/imgs/asso7.png"},
          {picture: "assets/imgs/asso8.png"}
        ]
      }

      refreshList() {
        this.itemsMenu = [];
        this.itemsMenu = [
          {description: 'Rechercher une association', page: TabsPage},
          {description: 'Rechercher un utilisateur', page: TabsPage}
        ];
      }
    }
