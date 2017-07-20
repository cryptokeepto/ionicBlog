import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from "../home/home";
import { AboutPage } from "../about/about";
import { ContactPage } from "../contact/contact";
import { Contact2Page } from "../contact2/contact2";


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  home: any = HomePage;
  about: any = AboutPage;
  contact: any = ContactPage;
  contact2: any = Contact2Page;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
