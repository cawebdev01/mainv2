import { Component } from '@angular/core';
import { NavController, Loading, } from 'ionic-angular';
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
  constructor(private nav: NavController, private auth: AuthService,){
    /*let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];*/
    this.username = "Clement";
    this.email = "ca@xam.fr";
  }
  public mails(){
    this.nav.push(MailsPage)
  }
  public abooks(){
    this.nav.push(AbooksPage)
  }
  public notes(){
    this.nav.push(NotesPage)
  }
  public tasks(){
  this.nav.push(TasksPage)
  }
  public storage(){
    this.nav.push(StoragePage)
  }
  public calendars(){
    this.nav.push(CalendarsPage)
  }
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot(LoginPage)
    });
  }
}