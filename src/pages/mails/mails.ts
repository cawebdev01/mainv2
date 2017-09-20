import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MailsService } from '../../providers/mails-service';
import { MailPage } from '../mail/mail';

@Component({
  selector: 'page-mails',
  templateUrl: 'mails.html',
  

})
export class MailsPage {
  public sessionid;

  constructor(
    public nav: NavController, 
    public navParams: NavParams, 
    private mailsService: MailsService, 
  ) {
    this.sessionid = navParams.get("sessionid");
    this.loadMails();
  }
  
  file: '';
  /*getJsonData(){
    return this.http.get('../../json/mails.json').map(res => res.json());
  }*/
  msgNb : number;
  newMsg: number;
  mails: any;
  status : object;
  public msgid;
  
  loadMails(){
      this.mailsService.getMails(this.sessionid).subscribe(mails => {
      this.msgNb = mails.msgNb,
      this.newMsg = mails.newMsg,
      this.mails = mails.data,
      this.status = mails.status
      //this.msgid =
      //console.log(this.mailsData);
   })
  }
  objectid;
  from;
  to;
  subject;
  date;
  text;
  plaintext;
  maildetail(objectid){
    this.nav.push(MailPage, {"sessionid": this.sessionid, "msgid" : objectid});
   
  }
  /*getMails(){
    this.getJsonData().subscribe(
      result => {
        this.mailsData = result.data.childen;
        console.log(this.mailsData);
      }, 
      err =>{
        console.error("Error : "+err);
      },
      () => {
        console.log('getMails completed');
      }
    )
  }*/

}
