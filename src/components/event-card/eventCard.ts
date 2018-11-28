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
    this.appCtrl.getRootNavById().push(AssociationPage, {association: asso});
  }

  setSegment() {
    var index = this.slides.getActiveIndex();
    if(index == 2) {
      this.currentOnglet = this.ongletTitle[1];
    } else if (index == 3) {
      this.currentOnglet = this.ongletTitle[2];
    } else {
      this.currentOnglet = this.ongletTitle[0];
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
