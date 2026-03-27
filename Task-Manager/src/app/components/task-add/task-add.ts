import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  standalone: true,
  selector: 'app-task-add',
  imports: [FormsModule],
  template: `
  <div class="container mt-4">
    <form (ngSubmit)="submit()">
      <input [(ngModel)]="task.title" name="title" class="form-control mb-2" placeholder="Title">
      <textarea [(ngModel)]="task.description" name="desc" class="form-control mb-2"></textarea>
      <select [(ngModel)]="task.priority" name="priority" class="form-select mb-2">
        <option>Low</option><option>Medium</option><option>High</option>
      </select>
      <select [(ngModel)]="task.status" name="status" class="form-select mb-2">
        <option>Pending</option><option>In Progress</option><option>Completed</option>
      </select>
      <button class="btn btn-success">Add</button>
    </form>
  </div>
  `
})
export class TaskAdd {
  task:any = {};
  constructor(private service: TaskService, private router: Router){}

  submit(){
    this.service.addTask(this.task);
    this.router.navigate(['/tasks']);
  }
}