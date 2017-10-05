import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../providers/storage-service';
import { DocPage } from '../doc/doc';

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
  folderid;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private docsService: StorageService,  
  ) {
    this.sessionid = localStorage.getItem("sessionid");
    this.folderid = navParams.get("folderid");
    this.loadDocs();
  }
  status;
  data;
  loadDocs(){
    this.docsService.getDocs(this.sessionid, this.folderid).subscribe(docs => {
    this.status = docs.status,
    this.data = docs.data
    })
  }
  loadDoc(folderid, objectid){
    this.navCtrl.push(DocPage, {"folderid": folderid, "fileid": objectid});
  }


}
