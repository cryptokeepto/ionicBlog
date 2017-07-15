import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NewsProvider } from "../../providers/news/news";
import { News } from "../../models/news";
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  news: News[];
  sub: Subscription;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private loadingCtrl: LoadingController,
              private newsProvider: NewsProvider) {}


  ionViewWillEnter(): void {
    this.getNewsProvider();
  }

  ionViewWillLeave(): void {
    this.sub.unsubscribe();
  }

  private getNewsProvider(): void {
    let loading: any = this.loadingCtrl.create({
      content: "Please Wait..."
    });

    loading.present();

    this.sub = this.newsProvider.getNews().subscribe(
      (res) => this.news = res,
      (err) => { loading.dismiss(), console.log(err) },
      () => { loading.dismiss(), console.log("Subscribe news เรียบร้อย") }
    );
  }

  private doRefresh(refresher) {
    this.sub = this.newsProvider.getNews().subscribe(
      (res) => this.news = res,
      (err) => refresher.complete(),
      () => refresher.complete()
    );
  }

}
