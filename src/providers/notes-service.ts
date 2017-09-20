import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NotesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotesService {

  constructor(public http: Http) {}
  getNotesLists(sessionid){
    return this.http.get('https://www1.dc.xandmail.com/ca/testbuild_aruba_staff/cgi-bin/mobilenotes?ACT_NOTELIST_LIST=1&tpl=notelist_list&ID='+sessionid).map((res:Response) => res.json());
  }
  getNotes(sessionid, listid){
    return this.http.get('https://www1.dc.xandmail.com/ca/testbuild_aruba_staff/cgi-bin/mobilenotes?ACT_NOTE_LIST=1&NLUID='+listid+'&tpl=notelist_content&ID='+sessionid).map((res:Response)=> res.json());
  }
  getNote(sessionid, listid, objectid){
    return this.http.get('').map((res:Response)=>res.json());
  }
}
