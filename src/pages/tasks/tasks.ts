import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TasksService } from '../../providers/tasks-service'

/**
 * Generated class for the TasksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {
  public sessionid;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private tasksservice: TasksService,
  ) {
    this.sessionid = navParams.get("sessionid");
    this.loadTasks();
  }
  data;
  status;
  loadTasks(){
    this.tasksservice.getTasks(this.sessionid).subscribe(tasks => {
      this.data = tasks.data;
      this.status = tasks.status;

    })
  }
}
