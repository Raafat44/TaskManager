import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  tasks: Array<Task> = [];

  constructor() 
  {
    if(localStorage.getItem('tasks') != null)
    this.tasks = JSON.parse(localStorage.getItem('tasks'));
    else
    this.tasks = [];
  }
  deleteTask(i)
  {
    this.tasks.splice(i,1);
    this.saveAll();
  }
  saveTask(title,des)
  {
    this.tasks.push({
      title:title,
      description:des
    })
    this.saveAll();
  }
  modifytask(title,des,id)
  {
    this.tasks[id] = {
      title : title,
      description : des
    }
    this.saveAll();
  }
  saveAll()
  {
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }
  
}
