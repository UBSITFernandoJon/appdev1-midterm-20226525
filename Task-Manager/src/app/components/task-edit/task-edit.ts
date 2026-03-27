import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  standalone: true,
  imports: [FormsModule],
  template: `
  <div class="container mt-4" *ngIf="task">
    <form (ngSubmit)="save()">
      <input [(ngModel)]="task.title" name="title" class="form-control mb-2">
      <textarea [(ngModel)]="task.description" name="desc" class="form-control mb-2"></textarea>
      <button class="btn btn-primary">Save</button>
    </form>
  </div>
  `
})
export class TaskEdit {
  task:any;
  constructor(route: ActivatedRoute, private service: TaskService, private router: Router){
    const id = Number(route.parent?.snapshot.params['id']);
    this.task = this.service.getTaskById(id);
  }

  save(){
    this.service.updateTask(this.task);
    this.router.navigate(['../info']);
  }
}
