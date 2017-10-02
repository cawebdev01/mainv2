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
  private reload;
  constructor(
    public nav: NavController, 
    public navParams: NavParams, 
    private mailsService: MailsService, 
  ) {
    this.sessionid = localStorage.getItem('sessionid');
    this.loadMails();
   /* this.reload = setInterval(() =>{
      this.loadMails();
    }, 10000)*/
  }
  
  file: '';
  /*getJsonData(){
    return this.http.get('../../json/mails.json').map(res => res.json());
  }*/
  msgNb : number;
  newMsg: number;
  public mails: any;
  status : object;
  public msgid;
  pages; page; next; prev;
  
  loadMails(){
    this.mailsService.getMails(this.sessionid).subscribe(mails => {
      this.msgNb = mails.msgNb,
      this.newMsg = mails.newMsg,
      this.mails = mails.data,
      this.status = mails.status,
      this.page = mails.pageInfo.page,
      this.pages = mails.pageInfo.pageCount,
      this.next = mails.pageInfo.nextPage,
      this.prev = mails.pageInfo.prevPage
    })
  }
  nextpage(e){
    this.mailsService.nextPageList(this.sessionid).subscribe(mailslist=>{
      this.mails = mailslist.data,
      this.page = mailslist.pageInfo.page,
      this.pages = mailslist.pageInfo.pageCount,
      this.next = mailslist.pageInfo.nextPage,
      this.prev = mailslist.pageInfo.prevPage
    })
    console.log("la page suivante se charge");    
  }
  prevpage(e){
    this.mailsService.prevPageList(this.sessionid).subscribe(mailsprev=>{
      this.mails = mailsprev.data,
      this.page = mailsprev.pageInfo.page,
      this.pages = mailsprev.pageInfo.pageCount,
      this.next = mailsprev.pageInfo.nextPage,
      this.prev = mailsprev.pageInfo.prevPage
    })
    console.log("La page précédente");
  }
  objectid: number;
  from;
  to;
  subject;
  date;
  text;
  plaintext;
  maildetail(objectid){
    this.nav.push(MailPage, {"msgid" : objectid});
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
