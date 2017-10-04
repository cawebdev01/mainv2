import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TasksService } from '../../providers/tasks-service'

@Component({
  selector: 'page-taskslist',
  templateUrl: 'taskslist.html',
})
export class TasksListPage {
  sessionid;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private tasksservice: TasksService,
  ) {
    this.sessionid = navParams.get("sessionid");
    this.loadTasksList();
  }
  data; status;
  loadTasksList(){
    this.tasksservice.getTasksList(this.sessionid).subscribe(taskslists => {
      this.data = taskslists.data;
      this.status = taskslists.status;
    })
  }

}
