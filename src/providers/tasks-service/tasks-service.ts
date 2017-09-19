import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TasksServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TasksService {

  constructor(public http: Http) {}
  getTasks(sessionid){
    return this.http.get('http://www1.dc.xandmail.com/ca/testbuild_aruba_staff/cgi-bin/mobiletasks?ACT_TASK_LIST=1&SORT=&TLUID=1&allowAccessMode=&tpl=tasklist_content&ID='+sessionid+'&nocache=172769.18304377276&_=1505806318500').map((res:Response) => res.json());
  }


}
