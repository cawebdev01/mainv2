import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AbooksService } from '../../providers/abooks-service';

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
    this.sessionid = navParams.get("sessionid");
    this.abid = navParams.get("abid");
    
    this.abooksService.getAbook(this.sessionid, this.abid).subscribe(abook =>{
      this.name = abook.abname;
      this.data = abook.data;
    })
  }


}
