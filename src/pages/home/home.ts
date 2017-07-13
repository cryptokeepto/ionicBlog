import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Item } from "../../models/item";
import { BlogsProvider } from "../../providers/blogs/blogs";
import { Subscription } from "rxjs/subscription";
import { BlogDetailPage } from "../blog-detail/blog-detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  blogs: Item[];
  sub: Subscription;
  errMessage: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private blogsProvider: BlogsProvider) {}

  ionViewWillEnter() {
    this.getBlogProvider()
  }

  ionViewWillLeave() {
    this.sub.unsubscribe();
  }

  private getBlogProvider() {
    this.sub = this.blogsProvider.getBlogs().subscribe(
      (res) => this.blogs = res,
      (err) => this.errMessage = err,
      () => console.log("Subscribe blog เรียบร้อย")
    );
  }

  private clickDetail(blog): void {
    this.navCtrl.push(BlogDetailPage, {
      id: blog.id,
      title: blog.c_title
    })
  }

}
