import { Component, ViewChild } from '@angular/core';
import { Tabs } from 'ionic-angular'
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

  @ViewChild('mainTabs') tabRef: Tabs;
  tabsColor: String = "search"
  monAssociation : any = {
    association: "Mon Association"
  }

  constructor() {}

  tabsChanged() {
    let selectedIndex = this.tabRef.getSelected().tabTitle;

    switch(selectedIndex) {
      case "Mon asso": {
        this.tabsColor = "primary"
        break;
      }
      case "Accueil": {
        this.tabsColor = "search"
        break;
      }
      case "Messages": {
        this.tabsColor = "dynamic"
        break;
      }
    }

  }

}
