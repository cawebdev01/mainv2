import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MailsService } from '../../providers/mails-service'

@Component({
  selector: 'page-mail',
  templateUrl: 'mail.html',
})
export class MailPage {
  public sessionid; public msgid;
  from; to; subject; date; text; plaintext
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private mailsService: MailsService,
  ) {
    this.sessionid = localStorage.getItem('sessionid');
    this.msgid = navParams.get("msgid");
    this.mailsService.markRead(this.sessionid, this.msgid);
    this.mailsService.getMail(this.sessionid, this.msgid).subscribe(mail => {
      //this.objectid = mail.objectId,
      this.from = mail.from,
      this.to = mail.to,
      this.subject = mail.subject,
      this.date = mail.date,
      this.text = mail.text,
      this.plaintext = mail.plaintext
    })
  }
}
