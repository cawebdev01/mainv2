import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotesService } from '../../providers/notes-service'

@Component({
  selector: 'page-notedetail',
  templateUrl: 'notedetail.html',
})
export class NotedetailPage {
  public sessionid; objectid; noteid; status; edit; cdate; mdate; name; content:string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public notesService: NotesService,
  ) {
    this.sessionid = localStorage.getItem('sessionid');
    this.objectid = navParams.get("objectid");
    this.noteid = navParams.get("noteid");
    this.notesService.getNote(this.sessionid, this.objectid, this.noteid).subscribe(note =>{
      /*this.status = note.status;
      this.cdate = note.cDate;
      this.mdate = note.mDate;*/
      this.name = note.name;
      this.content = note.content;
      console.log( this.name)
    })

  }


}
