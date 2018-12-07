import { Component } from '@angular/core';
import { NavController, NavParams, App, ToastController } from 'ionic-angular';
import { ProfilPage } from '../profil/profil';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-association',
  templateUrl: 'association.html',
})
export class AssociationPage {

  associationName;
  association: any;
  isEdit: any = false;
  editable : any = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public appCtrl: App) {

    if(!localStorage.getItem("Token")) {
      this.appCtrl.getRootNav().push(LoginPage);
    } else {
      this.associationName = this.navParams.get("association");
      this.getAssociationDetails(this.associationName);
    }
  }

  ionViewDidLoad() {}

  showProfil() {
    this.navCtrl.push(ProfilPage, {animate: true, animation: 'ios-transition', duration: 1000});
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

  editer() {
    this.isEdit = !this.isEdit;
  }

  save() {
    this.isEdit = !this.isEdit;
  }

  goToProfil(membre) {
    this.navCtrl.push(ProfilPage, {profile: membre});
  }

  getAssociationDetails(associationName) {

    console.log(associationName);

    if(associationName == "Earth Green") {
      this.association = {
        name: associationName, image: "assets/imgs/event1Logo.jpg", localisation: "assets/imgs/maps.png", description: "Une organisation sympathique et humanitaire", website: "www.google.fr",
        members: [
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
        ],
        events: [
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
]
};
}
if(associationName == "Rockschool Barbey") {
  this.association = {
    name: associationName, image: "assets/imgs/event2Logo.png", description: "l'Organisation officielle de la Rockschool Barbey", localisation: "assets/imgs/maps.png", website: "www.google.fr",
    members: [
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
    ],
    events: [
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
]
}
}
if(associationName == "Metallica Fanclub") {
  this.association = {
    name: associationName, image: "assets/imgs/event3Logo.jpg", description: "Le fan club officielle de Metallica", localisation: "assets/imgs/maps.png", website: "www.google.fr",
    members: [
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
    ],
    events: [
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
]
}
}
if(associationName == "Web for All") {
  this.association = {
    name: associationName, image: "assets/imgs/event4Logo.png", description: "Une association tentant de faire évoluer le web", localisation: "assets/imgs/maps.png", website: "www.google.fr",
    members: [
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
    ],
    events: [
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
]
}
}
if(!associationName) {
  this.association = {
    name: "Rider of Heaven", image: "assets/imgs/MTB.jpg", description: "Association de descente", website: "www.google.fr", localisation: "assets/imgs/maps.png",
    members: [
      {
        nom: "Gamin",
        prenom: "Nicolas",
        pseudo: "Althalux",
        birth: "06/12/1993",
        ville: "Bordeaux",
        mail: "nicolas.gamin@gmail.com",
        image: "assets/imgs/Nicolas.jpg",
        status: "Membre"
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
    ],
    events: [
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
]
};
this.editable = true;
}
}

}
