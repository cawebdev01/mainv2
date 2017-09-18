//import { MyApp } from '../../app/app.component';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, Loading, } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

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
  /*mailnbr = 8;
  abooknbr = 3;
  notesnbr = 5;
  tasksnbr = 4;
  calnbr = 2;
  storagenbr = 6;*/
  public sessionid;

  constructor(private nav: NavController, private auth: AuthService, public navParams: NavParams){
    this.sessionid = navParams.get("sessionid");
    this.email = navParams.get("email");
  }
  public mails(){
    this.nav.push(MailsPage, {"sessionid": this.sessionid})
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