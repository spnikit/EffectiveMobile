import { inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatusEnum, TaskStore } from '../models/task.model';
import { LocalStorageService } from './local-storage.service';
import { LOCAL_ST_TASK_KEY } from '../models/constants';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  taskStore = signal<TaskStore>({ tasks: [], filters: {} });
  lsService = inject(LocalStorageService);

  constructor() {
    const localStrgTasks = this.lsService.getTaskList(LOCAL_ST_TASK_KEY);

    this.taskStore.set({
      tasks: localStrgTasks ?? [],
      filters: {},
    });
  }

  getTaskByID(taskID: string): Task {
    return this.taskStore().tasks.find((task) => task.id === taskID)!;
  }

  createTask(task: Task) {
    this.lsService.setTaskList(LOCAL_ST_TASK_KEY, [
      task,
      ...this.taskStore().tasks,
    ]);
    this.taskStore.update((store) => ({
      ...store,
      tasks: [task, ...store.tasks],
    }));
  }

  deleteTask(taskID: string) {}

  updateTask(task: Task) {}

  setStatusFilter(statusFilter: TaskStatusEnum | undefined) {
    this.taskStore.update((store) => ({
      ...store,
      filters: {
        statusFilter,
      },
    }));
  }
}
