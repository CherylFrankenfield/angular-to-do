import { Component } from '@angular/core';

//Template acts as View in MVC
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
     <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
     <h3>{{currentFocus}}</h3>
     <ul>
       <li *ngFor="let currentTask of tasks">{{currentTask.description}}</li>
     </ul>
   </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
//define firstTask variable as the Task type. Because we've exported a Task class below, Task is now a valid data type for variables.
  // firstTask: Task = new Task("Finish weekend Angular homework for Epicodus course");
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course'),
    new Task('Begin brainstorming possible JavaScript group projects'),
    new Task('Add README file to last few Angular repos on GitHub')
  ];
}

//Model of MVC
export class Task {
  public done: boolean = false;
  constructor(public description: string) { }
}
