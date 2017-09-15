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
  getMails(){
    return this.http.get('http://www1.dc.xandmail.com/ca/testbuild_leggera/cgi-bin/ajaxmail?Act_Msgs_Refresh=1&Tpl=mail_list&ID=IeBAJjpkyZMWrUoVMmBALUq0_rRdq0alCqS.JXehS6_qAJ16da9A-&CONTID=&C_Folder=SU5CT1g=&autoRefresh=false&KEEPPAGE=1&nocache=110474.12492710506').map((res:Response) => res.json());
    
    
    // cal http://www1.dc.xandmail.com/ca/testbuild_leggera/cgi-bin/ajaxcal?ActSearch=1&FromWebmail=1&tpl=eventlist&norefresh&start_year_list=2017&start_month_list=8&start_day_list=10&end_year_list=2017&end_month_list=11&end_day_list=1&UserCalDisplayMode=&FullReload=1&istitles=1&search_string=&search_class=1&ID=IeBAJD5g6ZMmjckWMmBAL37cOyd758_3Psx_tlHtwr2eaFzpU_PA-&nocache=2945.420613039262
  }
}
