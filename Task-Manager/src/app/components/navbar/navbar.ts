import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand">TaskFlow</a>
      <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="nav" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a routerLink="/tasks" routerLinkActive="active" class="nav-link">Tasks</a>
          </li>
          <li class="nav-item">
            <a routerLink="/tasks/new" routerLinkActive="active" class="nav-link">Add</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  `
})
export class Navbar {}