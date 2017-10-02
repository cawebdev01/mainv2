import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MailsService } from '../../providers/mails-service'
@Component({
  selector: 'page-newmail',
  templateUrl: 'newmail.html',
})
export class NewmailPage {
  from; to; subject; attach; text; sessionid;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private mailsservice : MailsService,
  ){
    this.from = localStorage.getItem('mail');
    this.sessionid = localStorage.getItem('sessionid');
  }

  saveMail(){

  }
  sendMail(){

  }
}
