import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BlogsProvider } from "../../providers/blogs/blogs";
import { Subscription } from "rxjs/subscription";
import { Item } from "../../models/item";
import { YoutubePage } from "../../pages/youtube/youtube";

@IonicPage()
@Component({
  selector: 'page-blog-detail',
  templateUrl: 'blog-detail.html',
})
export class BlogDetailPage {

  id: number;
  title: string;
  sub: Subscription;
  errMessage: any;
  blogDetail: Item[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private blogsProvider: BlogsProvider) {

    this.id = this.navParams.get("id");
    this.title = this.navParams.get("title");
  }

  ionViewWillEnter() {
    this.getBlogDetailProvider()
  }

  ionViewWillLeave() {
    this.sub.unsubscribe();
  }

  private getBlogDetailProvider() {
    this.sub = this.blogsProvider.getBlogDetail(this.id).subscribe(
      (res) => this.blogDetail = res,
      (err) => this.errMessage = err,
      () => console.log("Subscribe blog detail เรียบร้อย")
    )
  }

  private clickDetail(blog): void {
    this.navCtrl.push(YoutubePage, {
      title: blog.ch_title,
      url: blog.ch_url
    });
  }


}
