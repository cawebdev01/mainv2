import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AbooksService } from '../../providers/abooks-service';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-abook',
  templateUrl: 'abook.html',
})
export class AbookPage {
  public sessionid; public abid; data; name;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private abooksService : AbooksService,
  ) {
    this.sessionid = localStorage.getItem("sessionid");
    this.abid = navParams.get("abid");
    
    this.abooksService.getAbook(this.sessionid, this.abid).subscribe(abook =>{
      this.name = abook.abname;
      this.data = abook.data;
    })
  }
  contactdetail(abid, objectid){
    this.navCtrl.push(ContactPage, {"abid": abid, "cid": objectid})
  }

}
