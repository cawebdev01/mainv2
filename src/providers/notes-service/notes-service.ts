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
  getNotes(){
    return this.http.get('http://www1.dc.xandmail.com/ca/testbuild_leggera/cgi-bin/ajaxnotes?ACT_NOTE_LIST=1&Tpl=notelist_list&NLUID=1&GOPAGE=1&ID=IeBAJjpkyZMWrUoVMmBALUq0_rRdq0alCqS.JXehS6_qAJ16da9A-&nocache=975138.3514046905').map((res:Response) => res.json());
  }

}
