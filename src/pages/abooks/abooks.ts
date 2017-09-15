import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AbooksService } from '../../providers/abooks-service/abooks-service';
/**
 * Generated class for the AbooksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-abooks',
  templateUrl: 'abooks.html',
})
export class AbooksPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private abooksService : AbooksService,
  ) {
    this.loadAbooks();
  }
  status;
  abid;
  objectNb;
  groups;
  abooks;
  loadAbooks(){
    this.abooksService.getAbooks().subscribe(
      data => {
        this.status = data.status,
        this.abid = data.abid,
        this.objectNb = data.objectNb,
        this.groups = data.groups,
        this.abooks = data.abooks
      }
    )
  }
}
