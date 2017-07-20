import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {


  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private storage: Storage) { }

  ionViewWillEnter() {
    this.storage.ready().then(() => {
      this.storage.set("name", "mike");
      this.storage.set("phone", "0992828286");
      this.storage.set("age", "22");
    });
  }


}
