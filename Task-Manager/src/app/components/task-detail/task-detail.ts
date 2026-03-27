import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  template: `
  <div class="container mt-4">
    <a [routerLink]="['info']" class="btn btn-outline-primary">Info</a>
    <a [routerLink]="['edit']" class="btn btn-outline-secondary">Edit</a>
    <router-outlet></router-outlet>
  </div>
  `
})
export class TaskDetail {
  id:number;
  constructor(route: ActivatedRoute){
    this.id = Number(route.snapshot.params['id']);
  }
}