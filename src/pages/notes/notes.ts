import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotesService } from '../../providers/notes-service';
import { NotedetailPage } from '../notedetail/notedetail';

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {
  public sessionid; public objectid;
  status; header; data; noteid;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private notesService: NotesService)
  {
      this.sessionid = localStorage.getItem('sessionid');
      this.objectid = navParams.get("objectid");
      this.notesService.getNotes(this.sessionid, this.objectid).subscribe(notes =>{
        this.status = notes.status;
        this.header = notes.header;
        this.data = notes.data;
      })
  }
  getNoteDetail(objectid, noteid){
    this.navCtrl.push(NotedetailPage, {"objectid": objectid, "noteid":noteid})
  }
  

}
