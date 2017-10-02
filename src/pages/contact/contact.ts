import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AbooksService } from '../../providers/abooks-service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  sessionid; abid; cid;
  name; gender; phones; emails;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private AbooksService: AbooksService,
  ) {
    this.sessionid = localStorage.getItem('sessionid');
    this.abid = navParams.get("abid");
    this.cid = navParams.get("cid");
    this.AbooksService.getContact(this.sessionid, this.abid, this.cid).subscribe(contact=>{
      this.name = contact.displayname;
      this.gender = contact.gender;
      this.phones = contact.phones;
      this.emails = contact.emails;

    })
  }

}
