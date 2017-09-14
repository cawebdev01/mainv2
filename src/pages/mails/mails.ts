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

  constructor(public navCtrl: NavController, public navParams: NavParams, private mailsService: MailsService /*private httpProvider: HttpProvider*/) {
  }
  
  file: '';
  /*getJsonData(){
    return this.http.get('../../json/mails.json').map(res => res.json());
  }*/
  mailsData : ["status" ];
  
  /*loadMails(){
      this.mailsService.getMails().subscribe(data => {
      this.mailsData.status = data.status,
      this.mailsData.newMsg = data.newMsg,
      this.mailsData.msgNb = data.msgNb,
      console.log(this.mailsData);
   })
  }*/
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
