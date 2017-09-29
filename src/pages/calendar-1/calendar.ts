import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/*import { Calendar } from '@ionic-native/calendar';

constructor(private calendar: Calendar) { }


this.calendar.createCalendar('MyCalendar').then(
  (msg) => { console.log(msg); },
  (err) => { console.log(err); }
);*/
/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
