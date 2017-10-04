import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TasksService } from '../../providers/tasks-service';
import { TaskPage } from '../task/task';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {
  public sessionid;
  public tsklistid;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private tasksservice: TasksService,
  ) {
    this.sessionid = localStorage.getItem("sessionid");
    this.tsklistid = navParams.get("tsklistid");
    this.loadTasks();
  }
  data;
  status;
  loadTasks(){
   
    this.tasksservice.getTasks(this.sessionid, this.tsklistid).subscribe(tasks => {
      this.data = tasks.data;
      this.status = tasks.status;

    })
  }
  taskdetail(objectId: number, tsklistid:number){
     this.navCtrl.push(TaskPage, {"tsklistid": tsklistid, "objid": objectId});
  }
}
