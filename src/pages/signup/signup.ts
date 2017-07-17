import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  
  myForm: FormGroup;
  fullname: FormControl;
  email: FormControl;
  password: FormControl;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
