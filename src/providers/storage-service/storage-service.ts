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

  constructor(public http: Http) { }
  getDocs(sessionid){
    return this.http.get('http://www1.dc.xandmail.com/ca/testbuild_aruba_staff/cgi-bin/mobilefile?ACT_FIL_EXPSEL=1&tpl=file_list&ID='+sessionid+'&CURRENTUID=C1&FUID=&EXPZIP=&EPLCSET=&SHRUID=&SHOW_MODE=&nocache=509434.6284290563&_=1505806318501').map((res:Response) => res.json());
  }
}
