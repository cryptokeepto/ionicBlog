import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import { AuthProvider } from "../../providers/auth/auth";
import { FeedBack } from "../../models/feedback";


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
  feedback: FeedBack;
  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private authProvider: AuthProvider,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController,
              public formBuilder: FormBuilder) {

    this.fullname = this.formBuilder.control("",Validators.required);
    this.email = this.formBuilder.control("", Validators.compose([Validators.required, SignupPage.emailValidator]));
    this.password = this.formBuilder.control("", Validators.compose([Validators.required, Validators.minLength(6)]));

    this.myForm = this.formBuilder.group({
      fullname: this.fullname,
      email: this.email,
      password: this.password
    });

  }

  //ตรวจสอบความถูกต้องของอีเมล์โดยใช้ Regular Expression
  static emailValidator(control: FormControl) {
    let email_regxp: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email_regxp.test(control.value) ? null : { invalidEmail: true };
  }

  public signup(): void {
    console.log(this.myForm.value);
    let fullname = this.myForm.controls["fullname"].value;
    let email = this.myForm.controls["email"].value;
    let password = this.myForm.controls["password"].value;  

    // loading
    let loading = this.loadingCtrl.create({
      content: "Please Wait..."
    });
    loading.present();

    // subscribe
    this.authProvider.postSignup(fullname, email, password).subscribe(
        (res) => {
          this.feedback = res
          if (this.feedback.status == "ok") {
            let alert = this.alertCtrl.create({
              title: this.feedback.message,
              subTitle: "Welcome",
              buttons: ["ok"]
            });
            alert.present();
            this.myForm.reset();
          } else {
             let alert = this.alertCtrl.create({
              title: this.feedback.message,
              subTitle: "Opps !",
              buttons: ["ok"]
            });
            alert.present();
          }
        },
        (err) => {
          console.log(err),
          loading.dismiss()
        },
        () => { 
          console.log("Subscribe auth เรียบร้อย");
          loading.dismiss();
        }
        

      
    );

  }




}
