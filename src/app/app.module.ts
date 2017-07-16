import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// page
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { TabsPage } from "../pages/tabs/tabs";
import { MapPage } from "../pages/map/map";
import { BlogDetailPage } from "../pages/blog-detail/blog-detail";
import { YoutubePage } from "../pages/youtube/youtube";
import { NewsPage } from "../pages/news/news";
import { SignupPage } from "../pages/signup/signup";

// provider
import { BlogsProvider } from '../providers/blogs/blogs';
import { NewsProvider } from '../providers/news/news';
import { AuthProvider } from '../providers/auth/auth';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
    TabsPage,
    MapPage,
    BlogDetailPage,
    YoutubePage,
    NewsPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
    TabsPage,
    MapPage,
    BlogDetailPage,
    YoutubePage,
    NewsPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BlogsProvider,
    NewsProvider,
    AuthProvider
  ]
})
export class AppModule {}
