import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { eventCard } from '../components/event-card/eventCard';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ProfilPage } from '../pages/profil/profil';
import { MyEventsPage } from '../pages/my-events/my-events';
import { OtherEventsPage } from '../pages/other-events/other-events';
import { AssociationPage } from '../pages/association/association';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserApiProvider } from '../providers/user-api/user-api';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    eventCard,
    LoginPage,
    ProfilPage,
    MyEventsPage,
    OtherEventsPage,
    AssociationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    eventCard,
    LoginPage,
    ProfilPage,
    MyEventsPage,
    OtherEventsPage,
    AssociationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserApiProvider
  ]
})
export class AppModule {}
