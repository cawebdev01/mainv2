import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the StorageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageService {
  url;
  constructor(public http: Http) { 
    this.url = localStorage.getItem('url'); 
  }
  getFolders(sessionid){
    return this.http.get(this.url+'/cgi-bin/mobilefile?ACT_FIL_EXPSEL=1&EXPANDALL=1&tpl=fld_list&ID='+sessionid).map((res:Response) => res.json());
  }
  getDocs(sessionid, folderid){
    return this.http.get(this.url+'/cgi-bin/mobilefile?ACT_FIL_EXPSEL=1&tpl=file_list&ID='+sessionid+'&CURRENTUID='+folderid).map((res:Response) => res.json());
  }
  getDoc(sessionid, folderid, fileid){
    return this.http.get(this.url+'/cgi-bin/mobilefile?ACT_FIL_CURFILO=1&tpl=filo_act_edit&ID='+sessionid+'&CURRENTUID='+folderid+'&FUID='+fileid).map((res:Response) => res.json());
  }
}
