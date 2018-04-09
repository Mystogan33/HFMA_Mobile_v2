import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'page-my-events',
  templateUrl: 'my-events.html',
  animations: [
    trigger('eventsItems', [
      transition('* => *', [

        query(':enter', style({ opacity: 0}), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: 0.5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1.0}),
          ]))]), {optional: true})
          ])
        ])
      ]
})
export class MyEventsPage {

  events: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

      this.events = this.navParams.get("events");

  }

  ionViewWillEnter() {
    this.events = [];
    this.getEvents();
  }

  getEvents() {
    this.events = [
      {title: "Réunion sur l'énergie renouvelable", date: "13 Juillet 2018", logo: "assets/imgs/event1Logo.jpg",
      image: "assets/imgs/event1.jpg", description: "My style is unique and random. But I think it's important that it still makes sense.",
      tarif: "Gratuit", lieu: "Palais des expositions, Bordeaux", association: "Earth Green", likes: 2, comments: 3, published: 10
    },
    {title: "Concert de Lorenzo", date: "14 Juillet 2018", logo: "assets/imgs/event2Logo.png",
    image: "assets/imgs/event2.jpg", description: "I cry at random things, like a flower, or someone giving me a present, or my sister giving me a nice hug.",
    tarif: "23€", lieu: "Rock School Barbey, Bordeaux", association: "Rockschool Barbey", likes: 34, comments: 10, published: 6
  },
  {title: "Concert de Metallica", date: "15 Juillet 2018", logo: "assets/imgs/event3Logo.jpg", image: "assets/imgs/event3.jpg",
  description: "Goals transform a random walk into a chase.", tarif: "100€", lieu: "Bordeaux Arena, Bordeaux", association: "Metallica Fanclub", likes: 100, comments: 7, published: 8
},
{title: "Cocktail de rencontre des entreprises du web", date: "16 Juillet 2018", logo: "assets/imgs/event4Logo.png", image: "assets/imgs/event4.jpg",
description: "Creativity is the process of having original ideas that have value. It is a process; it's not random.", tarif: "Gratuit",
lieu: "Ingesup Bordeaux, Bordeaux", association: "Web for All", likes: 20, comments: 4, published: 1
}
];
}

filterEvents(ev: any) {

  this.getEvents();

  let val = ev.target.value;

  if (val && val.trim() != '') {
    this.events = this.events.filter((event) => {
      return (event.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
  }

}



}
