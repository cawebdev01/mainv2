import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { HttpProvider } from '../../providers/http/http';
import { MailsService } from '../../providers/mails-service/mails-service';

/**
 * Generated class for the MailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mails',
  templateUrl: 'mails.html',
  

})
export class MailsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private mailsService: MailsService, 
  ) {
    this.loadMails();
  }
  
  file: '';
  /*getJsonData(){
    return this.http.get('../../json/mails.json').map(res => res.json());
  }*/
  msgNb : number;
  newMsg: number;
  mails: [any];
  status : object;
  
  loadMails(){
      this.mailsService.getMails().subscribe(mails => {
      this.msgNb = mails.msgNb,
      this.newMsg = mails.newMsg,
      this.mails = mails.data,
      this.status = mails.status
      //console.log(this.mailsData);
   })
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
