//import { MyApp } from '../../app/app.component';
import { Component } from '@angular/core';
import { NavController, NavParams, /*ViewController, Loading, Platform, AlertController*/ } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

import { LoginPage } from '../login/login';
import { MailsPage } from '../mails/mails';
import { NotesPage } from '../notes/notes';
import { TasksPage } from '../tasks/tasks';
import { CalendarsPage } from '../calendars/calendars';
import { AbooksPage } from '../abooks/abooks';
import { StoragePage } from '../storage/storage';
//import { LocalNotifications} from '@ionic-native/local-notifications';
//import * as moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username = '';
  email = '';

  /*notifyTime: any;
  notifications: any[] = [];
  days: any[];
  chosenHours: number;
  chosenMinutes: number;
  mailnbr = 8;
  abooknbr = 3;
  notesnbr = 5;
  tasksnbr = 4;
  calnbr = 2;
  storagenbr = 6;*/
  public sessionid //= 'IeBAKTJo2YMWTAwRMmBAJnzIE2fqxYs_PNhW9sDPhjScfHSpwsGA-' ;


  constructor(
    private nav: NavController, 
    private auth: AuthService, 
    public navParams: NavParams,
  
    //public platform: Platform,
    //public alertCtrl: AlertController,
    //public localNotif: LocalNotifications,

  ){
   // localStorage.setItem('sessionid', this.sessionid);
   // localStorage.setItem('mail', 'ca01@xam.fr');
    this.sessionid = localStorage.getItem('sessionid') //navParams.get("sessionid");
    this.email = localStorage.getItem('mail');//navParams.get("email");
   /* this.notifyTime = moment(new Date()).format();
    this.chosenHours = new Date().getHours();
    this.chosenMinutes = new Date().getMinutes();
    this.days = [
      {title:'Monday', dayCode: 1 , checked: false},
      {title:'Tuesday', dayCode:2 , checked: false},
      {title:'Wednesday', dayCode:3 , checked: false},
      {title:'Thursday', dayCode:4 , checked: false},
      {title:'Friday', dayCode:5 , checked: false},
      {title:'Saturday', dayCode:6 , checked: false},
      {title:'Sunday', dayCode:0 , checked: false},    
    ];*/
  }
  /*timeChange(time){
    this.chosenHours = time.hour.value;
    this.chosenMinutes = time.minute.value;
  }
  addNotifications(){
    let currentDate = new Date();
    let currentDay = currentDate.getDay(); // Sunday = 0, Monday = 1, etc.
   
    for(let day of this.days){
 
        if(day.checked){
 
            let firstNotificationTime = new Date();
            let dayDifference = day.dayCode - currentDay;
 
            if(dayDifference < 0){
                dayDifference = dayDifference + 7; // for cases where the day is in the following week
            }
 
            firstNotificationTime.setHours(firstNotificationTime.getHours() + (24 * (dayDifference)));
            firstNotificationTime.setHours(this.chosenHours);
            firstNotificationTime.setMinutes(this.chosenMinutes);
 
            let notification = {
                id: day.dayCode,
                title: 'Hey!',
                text: 'You just got notified :)',
                at: firstNotificationTime,
                every: 'week'
            };
 
            this.notifications.push(notification);
 
        }
 
    }
 
    console.log("Notifications to be scheduled: ", this.notifications);
 
    if(this.platform.is('cordova')){
 
        // Cancel any existing notifications
        this.localNotif.cancelAll().then(() => {
 
            // Schedule the new notifications
            this.localNotif.schedule(this.notifications);
 
            this.notifications = [];
 
            let alert = this.alertCtrl.create({
                title: 'Notifications set',
                buttons: ['Ok']
            });
 
            alert.present();
 
        });
 
    }  
  }
  
  cancelAll(){
    this.localNotif.cancelAll();
    
       let alert = this.alertCtrl.create({
           title: 'Notifications cancelled',
           buttons: ['Ok']
       });
    
       alert.present();
    
  }*/
  public mails(){
    this.nav.push(MailsPage)
  }
  public abooks(){
    this.nav.push(AbooksPage, {"sessionid": this.sessionid})
  }
  public notes(){
    this.nav.push(NotesPage, {"sessionid": this.sessionid})
  }
  public tasks(){
    this.nav.push(TasksPage, {"sessionid": this.sessionid})
  }
  public storage(){
    this.nav.push(StoragePage, {"sessionid": this.sessionid})
  }
  public calendars(){
    this.nav.push(CalendarsPage, {"sessionid": this.sessionid})
  }
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot(LoginPage)
    });
  }
}