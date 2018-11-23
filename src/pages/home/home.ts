import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage} from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nom: string;
  prenom: string;
  age: number;

  constructor(public navCtrl: NavController) {

  }

  private showDetails()
  {
    console.log(this.nom);
    console.log(this.prenom);
    console.log(this.age);
    //this.navCtrl.push(DetailsPage);
  }

}

