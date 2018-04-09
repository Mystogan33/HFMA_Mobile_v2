import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AssociationPage } from '../association/association';

@Component({
  selector: 'tabs-panel',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AssociationPage;
  tab2Root = HomePage;
  tab3Root = ContactPage;

  monAssociation : any = {
    association: "Mon Association"
  }

  constructor() {

  }
}
