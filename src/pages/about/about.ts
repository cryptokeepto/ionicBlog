import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { SignupPage } from "../signup/signup";
import { Signup2Page } from "../signup2/signup2";


@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];

  private goHome(): void {
    this.navCtrl.setRoot(HomePage)
  }

  private openSignup(): void {
    this.navCtrl.push(SignupPage);
  }

  private openSignup2(): void {
    this.navCtrl.push(Signup2Page);
  }
}
