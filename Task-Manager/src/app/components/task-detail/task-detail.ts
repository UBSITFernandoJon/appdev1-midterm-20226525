import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
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
  id!: number;
  constructor(private route: ActivatedRoute, private router: Router) {
    const id = Number(this.route.snapshot.params['id']);
  
    if (isNaN(id)) {
      alert('Invalid Task ID');
      this.router.navigate(['/tasks']);
    }
  }
}