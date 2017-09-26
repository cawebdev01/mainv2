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
    /*return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post('http://www1.dc.xandmail.com/ca/testbuild_aruba_staff/cgi-bin/mobilenotes?ACT_NOTE_LIST=1&SORT=&NLUID='+listid+'&allowAccessMode=&tpl=notelist_content&ID='+sessionid+'&nocache=447788.3230796249', {headers:headers})
      .subscribe(res=>{
        resolve(res.json());
      }, (err)=>{reject(err)
      })
    })*/
    return this.http.get('http://www1.dc.xandmail.com/ca/testbuild_aruba_staff/cgi-bin/ajaxnotes?ACT_NOTE_LIST=1&SORT=&NLUID='+listid+'&allowAccessMode=&tpl=notelist_content&ID='+sessionid+'&nocache=447788.3230796249').map((res:Response)=> res.json());
  }/*
  getNote(sessionid, listid, objectid){
    return this.http.get('').map((res:Response)=>res.json());
  }*/
}
