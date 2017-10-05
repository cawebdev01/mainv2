import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../providers/storage-service';
import { StoragePage } from '../storage/storage';

@Component({
  selector: 'page-storagelist',
  templateUrl: 'storagelist.html',
})
export class StoragelistPage {
  public sessionid;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storageservice: StorageService,
  ) {
    this.sessionid = localStorage.getItem("sessionid");
    this.loadFolder();
  }
  status;
  data;
  drives;
  loadFolder(){
    this.storageservice.getFolders(this.sessionid).subscribe(folder =>{
      this.status = folder.status;
      this.data = folder.data;
      this.drives = folder.drives;
    })
  }
  foldercontent(objectid){
    this.navCtrl.push(StoragePage, {"folderid": objectid});
  }
}
