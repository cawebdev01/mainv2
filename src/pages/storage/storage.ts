import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../providers/storage-service';

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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private docsService: StorageService,  
  ) {
    this.sessionid = navParams.get("sessionid");
    this.loadDocs();
  }
  status;
  data;
  loadDocs(){
    this.docsService.getDocs(this.sessionid).subscribe(docs => {
    this.status = docs.status,
    this.data = docs.data
    })
  }
  doc(){
    //this.docsService.getDocs()
  }


}
