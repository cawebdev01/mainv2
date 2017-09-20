import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MailsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MailsService {

  constructor(public http: Http) { }
  getMails(sessionid){
    return this.http.get('http://www1.dc.xandmail.com/ca/testbuild_aruba_staff/cgi-bin/mobilemail?Act_Msgs=1&Tpl=mail_list&SpamFilter=&CONTID=&ID='+sessionid+'&C_Folder=SU5CT1g%3D&nocache=764752.2431924522&_=1505736101983').map((res:Response) => res.json());    
  }
  getMail(sessionid, msgid){
    return this.http.get('http://www1.dc.xandmail.com/ca/testbuild_aruba_staff/cgi-bin/mobilemail?Act_View=1&ShowFullHeaders=1&KEEPMSGUNREAD=1&ID='+sessionid+'&CONTID=&msgID='+msgid+'&C_Folder=SU5CT1g%3D&R_Folder=SU5CT1g%3D&Body=&TNEF=&nocache=736051.1005814119&_=1505812857901').map((res:Response)=> res.json());
  }
}
