import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CalendarsService } from '../../providers/calendars-service';
import { CalendarPage} from '../calendar/calendar';

@Component({
  selector: 'page-calendars',
  templateUrl: 'calendars.html',
})
export class CalendarsPage {
  public sessionid; calid;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private calService : CalendarsService,
  ) {
      this.sessionid = navParams.get("sessionid");
      this.loadCals();
  }
  
  calendars;

  loadCals(){
    this.calService.getCals(this.sessionid).subscribe(callist => {
      this.calendars = callist.calendars
    })
    
  }
  loadCal(){
    
  }

}
