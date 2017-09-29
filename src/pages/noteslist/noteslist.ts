import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotesService } from '../../providers/notes-service'
import { NotesPage } from '../notes/notes';
/**
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-noteslist',
  templateUrl: 'noteslist.html',
})
export class NotesListPage {
  public sessionid;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private notesService: NotesService,
  ) {
    this.sessionid = localStorage.getItem('sessionid');
    this.loadNotesLists();
  }
  status;
  data;
  sortInfo;
  pageInfo;
  countTotal;
  objectid;
  //itemslist;
  load;
  loadNotesLists(){
    this.notesService.getNotesLists(this.sessionid).subscribe(notes => {
      this.status = notes.status,
      this.data = notes.data
    })
  }
  getnotes(objectid){
    this.navCtrl.push(NotesPage, {"objectid": objectid})
  }

}
