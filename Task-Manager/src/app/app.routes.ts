import { Routes } from '@angular/router';
import { TaskList } from './components/task-list/task-list';
import { TaskAdd } from './components/task-add/task-add';
import { TaskDetail } from './components/task-detail/task-detail';
import { TaskInfo } from './components/task-info/task-info';
import { TaskEdit } from './components/task-edit/task-edit';

export const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskList },
  { path: 'tasks/new', component: TaskAdd },
  {
    path: 'tasks/:id',
    component: TaskDetail,
    children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      { path: 'info', component: TaskInfo },
      { path: 'edit', component: TaskEdit }
    ]
  },
  { path: '**', redirectTo: 'tasks' }
];