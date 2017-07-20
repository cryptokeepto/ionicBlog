import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-contact2',
  templateUrl: 'contact2.html',
})
export class Contact2Page {

  name: string;
  age: string;
  phone: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {}

  ionViewWillEnter() {
    this.storage.ready().then(() => {
      this.storage.get("name").then((data) => {
        this.name = data;
      });
      this.storage.get("age").then((data) => {
        this.age = data;
      });
      this.storage.get("phone").then((data) => {
        this.phone = data;
      });
    });
  }

}
