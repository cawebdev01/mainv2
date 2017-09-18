import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CalendarsService } from '../../providers/calendars-service/calendars-service';

/**
 * Generated class for the CalendarsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-calendars',
  templateUrl: 'calendars.html',
})
export class CalendarsPage {
  public sessionid;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private calService : CalendarsService,
  ) {
      this.sessionid = navParams.get("sessionid");
      this.loadCals();
  }
  id;
  name;
  callist : any;

  loadCals(){
    this.calService.getCals(this.sessionid).subscribe(callist => {
      //console.log(callist)
      //console.log(callist.calendars[0].name)
      
      //this.id = callist.calendars[0].id,
      this.name = callist.calendars[0].name.value
    })
    
  }

}
