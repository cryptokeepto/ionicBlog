import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController, AlertController } from 'ionic-angular';
import { SQLite } from "@ionic-native/sqlite";

@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {

  isToggle: boolean = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public platform: Platform, 
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              public sqlite: SQLite) {}

  private openForm() {
    this.isToggle = !this.isToggle;
  }

  ionViewWillEnter() {
    this.platform.ready().then((data) => {
      console.log(data);
    });
  }
  
 
}
