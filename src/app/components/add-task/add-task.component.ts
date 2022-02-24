import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {  Router } from '@angular/router';
import { TaskServiceService } from 'src/app/Services/task-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private serviceTasks:TaskServiceService,private router:Router,private title:Title)
   {
    this.title.setTitle('Add New Task - Task Manager')
   }
/*   @ViewChild('taskTitle') taskTitle:ElementRef;
  @ViewChild('taskDes') taskDes;
 */  ngOnInit(): void {
  }
  saveTask(title,des)
  {   
    this.serviceTasks.saveTask(title.value,des.value);
    this.router.navigate(['']);
  }
}
