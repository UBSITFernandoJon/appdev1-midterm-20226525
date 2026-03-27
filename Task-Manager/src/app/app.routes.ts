import { Routes } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { TaskAdd } from './components/task-add/task-add';
import { TaskDetail } from './components/task-detail/task-detail';
import { TaskEdit } from './components/task-edit/task-edit';
import { TaskInfo } from './components/task-info/task-info';
import { TaskList } from './components/task-list/task-list';

export const routes: Routes = [
    {path: 'navbar', component: Navbar},
    {path: 'task-add', component: TaskAdd},
    {path: 'task-detail', component: TaskDetail},
    {path: 'task-edit', component: TaskEdit},
    {path: 'task-info', component: TaskInfo},
    {path: 'task-list', component: TaskList}
];
