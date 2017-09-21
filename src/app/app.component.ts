import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CacheService } from "ionic-cache";

import { LoginPage } from '../pages/login/login';
//import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class XamApp {
  rootPage:any = LoginPage;
  //public sessionid: string;
  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    cache: CacheService,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      cache.setDefaultTTL(60 * 60 * 24);
      cache.setOfflineInvalidate(false);
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}