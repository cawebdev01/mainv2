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
  public url : string;
  constructor(public http: Http) {
    this.url =localStorage.getItem('url');
  }
  getTasksList(sessionid){
    return this.http.get(this.url+'/cgi-bin/ajaxtasks?ACT_TASKLIST_LIST=1&tpl=tasklist_list&ID='+sessionid).map((res:Response) => res.json());
  }
  getTasks(sessionid, tskid){
    return this.http.get(this.url+'/cgi-bin/ajaxtasks?ACT_TASK_LIST=1&SORT=&TLUID='+tskid+'&allowAccessMode=&tpl=tasklist_content&ID='+sessionid+'&nocache=172769.18304377276&_=1505806318500').map((res:Response) => res.json());
  }
  getTask(sessionid, tskid, objid){
    return this.http.get(this.url+'/cgi-bin/ajaxtasks?ACT_TASK=1&tpl=taskedit&TUID='+objid+'&TLUID='+tskid+'&ID='+sessionid).map((res:Response) => res.json());
  }

}
