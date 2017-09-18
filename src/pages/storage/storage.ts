import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StoragePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-storage',
  templateUrl: 'storage.html',
})
export class StoragePage {
  public sessionid;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sessionid = navParams.get("sessionid");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoragePage');
  }

}
