import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TaskServiceService } from 'src/app/Services/task-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  taskslength;
  constructor(public tasksService:TaskServiceService,private title:Title)
  {
    this.title.setTitle('Task Manager')
  }

  ngOnInit(): void {}
  DeleteTask(i)
  {
    this.tasksService.deleteTask(i);
  }
}
