import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NotesService {
  url;
  constructor(public http: Http) {
    this.url = localStorage.getItem('url');
  }
  getNotesLists(sessionid){
    return this.http.get(this.url+'/cgi-bin/mobilenotes?ACT_NOTELIST_LIST=1&tpl=notelist_list&ID='+sessionid).map((res:Response) => res.json());
  }
  getNotes(sessionid, listid){
    return this.http.get(this.url+'/cgi-bin/mobilenotes?ACT_NOTE_LIST=1&SORT=&NLUID='+listid+'&allowAccessMode=&tpl=notelist_content&ID='+sessionid+'&nocache=447788.3230796249').map((res:Response)=> res.json());
  }
  getNote(sessionid, listid, objectid){
    return this.http.get(this.url+'/cgi-bin/mobilenotes?ACT_NOTE=1&tpl=noteedit&NUID='+objectid+'&NLUID='+listid+'&ID='+sessionid).map((res:Response)=>res.json());
  }
}
