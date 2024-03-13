import { inject, Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';
import { LocalStorageService } from './local-storage.service';
import { LOCAL_ST_TASK_KEY } from '../models/constants';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  taskStore = signal<Task[]>([]);
  lsService = inject(LocalStorageService);

  constructor() {
    const localStrgTasks = this.lsService.getTaskList(LOCAL_ST_TASK_KEY);

    this.taskStore.set(localStrgTasks ?? []);
  }

  getTaskByID(taskID: string): Task {
    return this.taskStore().find((task) => task.id === taskID)!;
  }

  createTask(task: Task) {
    this.taskStore.update((store) => [task, ...store]);
  }

  deleteTask(taskID: string) {}

  updateTask(task: Task) {}
}
