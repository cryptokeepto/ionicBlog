import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from "../home/home";
import { AboutPage } from "../about/about";
import { ContactPage } from "../contact/contact";


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  home: any = HomePage;
  about: any = AboutPage;
  contact: any = ContactPage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
