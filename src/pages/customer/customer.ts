import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController, AlertController } from 'ionic-angular';
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";

@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {

  isToggle: boolean = false;
  checked: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public platform: Platform, 
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              public sqlite: SQLite) {}


  private openForm() {
    this.isToggle = !this.isToggle;
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.sqlite = new SQLite();

      this.sqlite.create({
        name: "mydb.db",
        location: "default"
      })
      .then((db: SQLiteObject) => {
        db.executeSql("CREATE TABLE IF EXISTS customer (id INTEGER PRIMARY KEY AUTOINCREMENT, fullname TEXT, phone TEXT)", {})
          .then((data) => {
            this.checked = data;
            console.log("table created");
          })
          .catch((err) => {
            console.log("error created"); 
          });
      });
    });
  }
  
 
}
