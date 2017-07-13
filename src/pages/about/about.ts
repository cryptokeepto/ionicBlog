import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ContactPage } from "../contact/contact";

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openContact() {
    this.navCtrl.push(ContactPage, {
      "name": "sittikiat",
      "age": 21
    });
  }

}
