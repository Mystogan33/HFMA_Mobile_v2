import { Component, Input, ViewChild } from '@angular/core';
import { NavController, App, Slides } from 'ionic-angular';
import { AssociationPage } from '../../pages/association/association';

@Component({
  selector: 'event-card',
  templateUrl: 'eventCard.html'
})
export class eventCard {

  @ViewChild(Slides) slides: Slides;

  @Input() event: any;

  currentOnglet: any = 'preview';

  isInterested: any = false;

  ongletTitle: any = ['preview', 'infos', 'pictures'];

  constructor(public navCtrl: NavController, public appCtrl: App) {}

  showAssociation() {
    let asso = this.event.association;
    this.appCtrl.getRootNav().push(AssociationPage, {association: asso});
  }

  setSegment() {
    var index = this.slides.getActiveIndex();

    switch(index) {
      case (0): { this.currentOnglet = this.ongletTitle[2]; break;}
      case 2: { this.currentOnglet = this.ongletTitle[1]; break;}
      case (3): { this.currentOnglet = this.ongletTitle[2]; break;}
      default: { this.currentOnglet = this.ongletTitle[0]; break }
    }

  }

  setSlide(index) {
    if(index == 0) {
      this.slides.slideTo(4, 500);
    } else if (index == 1) {
      this.slides.slideTo(2, 500);
    } else {
      this.slides.slideTo(3, 500);
    }
  }

  toggleInterest() {
    this.isInterested = !this.isInterested;
  }

}
