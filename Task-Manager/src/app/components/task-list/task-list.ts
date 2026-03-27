import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-task-list',
  imports: [RouterModule, CommonModule],
  template: `
  <div class="container mt-4">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let t of tasks">
          <td>{{t.title}}</td>
          <td><span class="badge bg-info">{{t.status}}</span></td>
          <td><span class="badge bg-secondary">{{t.priority}}</span></td>
          <td>
            <a [routerLink]="['/tasks', t.id]" class="btn btn-sm btn-primary">View</a>
            <button (click)="toggle(t.id)" class="btn btn-sm btn-warning">Toggle</button>
            <button (click)="remove(t.id)" class="btn btn-sm btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  `
})
export class TaskList {
  tasks: any[] = [];

constructor(private service: TaskService) {
  this.tasks = this.service.getTasks();
}

  toggle(id:number){ this.service.toggleStatus(id); }
  remove(id:number){ if(confirm('Delete?')) this.service.deleteTask(id); }
}
