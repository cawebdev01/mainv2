import { Component } from '@angular/core';
import { NavController, NavParams, } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service'; 
import { LocalNotifications } from '@ionic-native/local-notifications';
import { LoginPage } from '../login/login';
import { MailsPage } from '../mails/mails';
import { NotesPage } from '../notes/notes';
import { TasksPage } from '../tasks/tasks';
import { CalendarsPage } from '../calendars/calendars';
import { AbooksPage } from '../abooks/abooks';
import { StoragePage } from '../storage/storage';
import { HomeService } from '../../providers/home-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username = '';
  email = '';
  public sessionid 
  compagnies: any;
  task;

  constructor(
    private nav: NavController, 
    private auth: AuthService, 
    public navParams: NavParams,
    private localNotifications: LocalNotifications,
    private homeService: HomeService,
    
  ){    
    this.sessionid = localStorage.getItem('sessionid') 
    this.email = localStorage.getItem('mail');
    this.loadNews();
    this.task = setInterval(() =>{
      this.loadNews();
    }, 120000)
  }
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
    this.auth.logout()/*.subscribe(succ => {*/
      this.nav.setRoot(LoginPage)
    /*});*/
  }
 
  msgNb;
  key;
  loadNews(){
    this.homeService.getNews(this.sessionid).subscribe(datas => {
      this.msgNb = datas.msgNb
      if (this.msgNb == 1 ){
        //alert("Vous avez 1 nouveau message");
        this.localNotifications.schedule({
          id: 1,
          text: 'Vous avez 1 noveau message',
          sound: 'file://beep.caf',
          data: { secret : this.key }        })
      } 
      if (this.msgNb > 1 ){
        //alert("Vous avez "+ this.msgNb +" nouveau message");
        this.localNotifications.schedule({
          id: 1,
          text: 'Vous avez '+ this.msgNb + 'noveaux messages',
          sound: 'file://beep.caf',
          data: { secret : this.key }        })
      }
    })
  }
}