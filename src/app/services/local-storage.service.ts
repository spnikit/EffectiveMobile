import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getTaskList(key: string): Task[] | null {
    const stringifiedTaskList = localStorage.getItem(key);

    if (stringifiedTaskList === null) {
      return null;
    }

    return JSON.parse(stringifiedTaskList);
  }

  setTaskList(key: string, value: Task[]) {
    const stringifiedTaskList = JSON.stringify(value);
    localStorage.setItem(key, stringifiedTaskList);
  }

  removeTaskList(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
