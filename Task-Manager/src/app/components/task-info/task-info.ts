import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="card mt-3" *ngIf="task">
    <div class="card-header">{{task.title}}</div>
    <div class="card-body">
      <p>{{task.description}}</p>
      <p>Status: {{task.status}}</p>
      <p>Priority: {{task.priority}}</p>
    </div>
  </div>
  `
})
export class TaskInfo {
  task:any;
  constructor(route: ActivatedRoute, service: TaskService) {
    const id = Number(route.parent?.snapshot.params['id']);
    this.task = service.getTaskById(id);
  
    if (!this.task) {
      alert('Task not found');
    }
  }
}
