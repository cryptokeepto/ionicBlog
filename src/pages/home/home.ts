import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Course } from "../../models/course";
import { BlogsProvider } from "../../providers/blogs/blogs";
import { Subscription } from "rxjs/subscription";
import { BlogDetailPage } from "../blog-detail/blog-detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  blogs: Course[];
  sub: Subscription;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private loadingCtrl: LoadingController,
              private blogsProvider: BlogsProvider) {}

  ionViewWillEnter(): void {
    this.getBlogProvider()
  }

  ionViewWillLeave(): void {
    this.sub.unsubscribe();
  }

  private getBlogProvider(): void {
    let loading: any = this.loadingCtrl.create({
      content: "Please Wait..."
    });
    loading.present();

    this.sub = this.blogsProvider.getBlogs().subscribe(
      (res) => this.blogs = res,
      (err) => { console.log(err), loading.dismiss() },
      () => { console.log("Subscribe blog เรียบร้อย"), loading.dismiss() }
    );
  }

  private clickDetail(blog): void {
    this.navCtrl.push(BlogDetailPage, {
      id: blog.id,
      title: blog.c_title
    })
  }

  private getItems(ev: any): void { 
    let val = ev.target.value; 
   
    if (val && val.trim() != '') {
      this.blogs = this.blogs.filter((blogs: Course) => {
        return (blogs.c_title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else {
      this.getBlogProvider();
    }
  }

  private doRefresh(refresher): void {
    this.sub = this.blogsProvider.getBlogs().subscribe(
      (res) => this.blogs = res,
      (err) => refresher.complete(),
      () => refresher.complete()
    );
  }



}
