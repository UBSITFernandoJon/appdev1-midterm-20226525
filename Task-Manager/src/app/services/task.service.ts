import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks: Task[] = [
    {
      id: 1,
      title: 'Finish project',
      description: 'Complete Angular app',
      dueDate: new Date(),
      status: 'Pending',
      priority: 'High'
    },
    {
      id: 2,
      title: 'Study routing',
      description: 'Understand child routes',
      dueDate: new Date(),
      status: 'In Progress',
      priority: 'Medium'
    },
    {
      id: 3,
      title: 'Clean code',
      description: 'Refactor components',
      dueDate: new Date(),
      status: 'Completed',
      priority: 'Low'
    }
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find(t => t.id === id);
  }

  addTask(task: Task): void {
    task.id = Date.now();
    this.tasks.push(task);
  }

  updateTask(updated: Task): void {
    const index = this.tasks.findIndex(t => t.id === updated.id);
    if (index !== -1) this.tasks[index] = updated;
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  toggleStatus(id: number): void {
    const task = this.getTaskById(id);
    if (!task) return;
    task.status = task.status === 'Completed' ? 'Pending' : 'Completed';
  }
}