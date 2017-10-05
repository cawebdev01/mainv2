import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MailsService {
  url;
  constructor(public http: Http) { 
    this.url = localStorage.getItem('url');
  }
  getMails(sessionid){
    return this.http.get(this.url+'/cgi-bin/ajaxmail?Act_Msgs=1&Tpl=mail_list&SpamFilter=&CONTID=&ID='+sessionid+'&C_Folder=SU5CT1g%3D&nocache=764752.2431924522&_=1505736101983').map((res:Response) => res.json());    
  }
  nextPageList(sessionid){
    return this.http.get(this.url+'/cgi-bin/ajaxmail?Act_Msgs_Page_Next=1&Tpl=mail_list&ID='+sessionid).map((res:Response) => res.json());
  }
  prevPageList(sessionid){
    return this.http.get(this.url+'/cgi-bin/ajaxmail?Act_Msgs_Page_Prev=1&Tpl=mail_list&ID='+sessionid).map((res:Response) => res.json());
  }
  getMail(sessionid, msgid){
    return this.http.get(this.url+'/cgi-bin/ajaxmail?Act_View=1&ShowFullHeaders=1&KEEPMSGUNREAD=1&ID='+sessionid+'&CONTID=&msgID='+msgid+'&C_Folder=SU5CT1g%3D&R_Folder=SU5CT1g%3D&Body=&TNEF=&nocache=736051.1005814119&_=1505812857901').map((res:Response)=> res.json());
  }
  markRead(sessionid, msgid){
    return this.http.get(this.url+'/cgi-bin/ajaxmail?Act_Msgs_MarkRead=1&Tpl=mail_list&SpamFilter=&CONTID=&ID='+sessionid+'&C_Folder=SU5CT1g%3D&Msg_Nb=1&Msg_Sel_1='+msgid+'&noreload=&nocache=887950.8162637781').map((res:Response) => res.json());
  }
  markUnread(sessionid, msgid){
    return this.http.get(this.url+'/cgi-bin/ajaxmail?Act_Msgs_MarkUnread=1&Tpl=mail_list&SpamFilter=&CONTID=&ID='+sessionid+'&Msg_Nb=1&Msg_Sel_1='+msgid).map((res:Response) => res.json());
  }
  senderMail(sessionid){
    return this.http.get(this.url+'').map((res: Response) => res.json())
  }
  saverMail(sessionid){
    return this.http.get(this.url+'').map((res: Response) => res.json())
  }
}
