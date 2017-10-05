import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../providers/storage-service';

@Component({
  selector: 'page-doc',
  templateUrl: 'doc.html',
})
export class DocPage {
  public sessionid;
  private folderid;
  private fileid; 
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storageservice: StorageService,
  ) {
    this.sessionid = localStorage.getItem("sessionid");
    this.fileid = navParams.get("fileid");
    this.folderid = navParams.get("folderid");
    this.loadFile();

  }
  loadFile(){
    this.storageservice.getDoc(this.sessionid, this.folderid, this.fileid).subscribe(file => {

    })
  }

}
