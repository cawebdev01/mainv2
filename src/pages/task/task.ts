import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TasksService } from '../../providers/tasks-service';

@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {
  public sessionid;
  private tsklistid;
  private objid;
  title; priority; state; comment; percent;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private tasksService : TasksService,
  ) {
    this.sessionid = localStorage.getItem("sessionid");
    this.tsklistid = navParams.get("tsklistid");
    this.objid = navParams.get("objid");
    this.loadDetails();
  }
  loadDetails(){
    this.tasksService.getTask(this.sessionid, this.tsklistid, this.objid).subscribe(task => {
      this.title = task.data.label;
      this.priority = task.data.priority;
      this.state = task.data.state;
      this.percent = task.data.percent;
      this.comment = task.data.comment;
    })
  }
}
