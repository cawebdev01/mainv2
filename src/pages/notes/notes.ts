import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotesService } from '../../providers/notes-service/notes-service'
/**
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private notesService: NotesService,
  ) {
    this.loadNotes();
  }
  status;
  data;
  sortInfo;
  pageInfo;
  countTotal;
  //itemslist;

  loadNotes(){
    this.notesService.getNotes().subscribe(notes => {
      this.status = notes.status,
      this.data = notes.data,
      this.sortInfo = notes.sortInfo,
      this.pageInfo = notes.pageInfo,
      this.countTotal = notes.countTotal
     // this.itemslist = notes.itemslist
    })
  }

}
