import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskServiceService } from 'src/app/Services/task-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  taskID;
  Task;
  constructor(private route:ActivatedRoute , private serviceTasks:TaskServiceService,private router : Router,private title:Title) { }

  ngOnInit(): void {
    
      this.taskID = this.route.snapshot.paramMap.get('id');
      this.Task = this.serviceTasks.tasks[this.taskID];
      if(this.taskID != null)
        this.title.setTitle('Task Title : ' + this.serviceTasks.tasks[this.taskID].title)   
      else
        this.title.setTitle('Task Manager')   
    }
  saveTask(title,des)
  {   
    this.serviceTasks.saveTask(title.value,des.value);
    this.router.navigate(['']);
  }
  modifyTask(title,des,id)
  {   
    this.serviceTasks.modifytask(title.value,des.value,id);
    this.router.navigate(['']);
  }
  DeleteTask(i)
  {
    this.serviceTasks.deleteTask(i);
    this.router.navigate(['']);
  }
}
