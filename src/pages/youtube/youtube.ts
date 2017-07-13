import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@IonicPage()
@Component({
  selector: 'page-youtube',
  templateUrl: 'youtube.html',
})
export class YoutubePage {

  title: string;
  url: string;
  urlTrusted: SafeResourceUrl;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private domSanitizer: DomSanitizer) {


    this.title = this.navParams.get("title");
    this.url = "https://www.youtube.com/embed/" + this.navParams.get("url");
  }

  ionViewWillEnter() {
    this.urlTrusted = this.domSanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
