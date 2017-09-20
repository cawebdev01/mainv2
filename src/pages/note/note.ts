import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotesService } from '../../providers/notes-service';
import { NotedetailPage } from '../notedetail/notedetail';

@Component({
  selector: 'page-note',
  templateUrl: 'note.html',
})
export class NotePage {
  public sessionid; public objectid;
  status; header; data; 
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private notesService: NotesService) {
      this.sessionid = navParams.get("sessionid");
      this.objectid = navParams.get("objectid");
      this.notesService.getNotes(this.sessionid, this.objectid).subscribe(notes =>{
        this.status = notes.status;
        this.header = notes.header;
        this.data = notes.data;
      })
  }
  

}
