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

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username = '';
  email = '';
  public sessionid 
  compagnies: any;

  constructor(
    private nav: NavController, 
    private auth: AuthService, 
    public navParams: NavParams,
    private localNotifications: LocalNotifications,
  ){    
    this.sessionid = localStorage.getItem('sessionid') 
    this.email = localStorage.getItem('mail');
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
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot(LoginPage)
    });
  }
  
}