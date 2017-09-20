import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AbooksService } from '../../providers/abooks-service';
import { AbookPage } from '../abook/abook';

@Component({
  selector: 'page-abooks',
  templateUrl: 'abooks.html',
})
export class AbooksPage {
  public sessionid;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private abooksService : AbooksService,
  ) {
    this.sessionid = navParams.get("sessionid");
    this.loadAbooks();
  }
  status;
  abid;
  objectNb;
  groups;
  abooks;
  loadAbooks(){
    this.abooksService.getAbooks(this.sessionid).subscribe(
      data => {
        this.status = data.status,
        this.abid = data.abid,
        this.objectNb = data.objectNb,
        this.groups = data.groups,
        this.abooks = data.abooks
      }
    )
  }
  abookdetail(objectid){
    this.navCtrl.push(AbookPage, {"sessionid": this.sessionid, "abid": objectid})
  }
}
