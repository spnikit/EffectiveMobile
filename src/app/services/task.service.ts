import { Injectable, signal } from '@angular/core';
import { dummyData } from '../models/dummy.model';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  taskStore = signal(dummyData);

  constructor() {}

  getTaskByID(taskID: string): Task {
    return this.taskStore().find((task) => task.id === taskID)!;
  }

  createTask(task: Task) {}

  deleteTask(taskID: string) {}

  updateTask(task: Task) {}
}
