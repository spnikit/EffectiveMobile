import { Task, TaskStatus, TaskStatusEnum } from '../models/task.model';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { LocalStorageService } from '../services/local-storage.service';
import { computed, inject } from '@angular/core';
import { LOCAL_ST_TASK_KEY } from '../models/constants';

interface TaskStore {
  tasks: Task[];
  isLoading: boolean;
  filters: {
    status?: TaskStatus;
  };
}

const initialState: TaskStore = {
  tasks: [],
  isLoading: false,
  filters: {},
};

export const TaskStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ tasks, filters }) => ({
    filteredTasks: computed(() => {
      if (!filters().status) {
        return tasks();
      }

      return tasks().filter((task) => task.status === filters().status);
    }),
  })),
  withMethods((store, lsService = inject(LocalStorageService)) => ({
    loadAll() {
      const tasks = lsService.getTaskList(LOCAL_ST_TASK_KEY);

      if (tasks) {
        patchState(store, { tasks });
      }
    },

    createTask(task: Task) {
      lsService.setTaskList(LOCAL_ST_TASK_KEY, [task, ...store.tasks()]); // update local storage with new task

      patchState(store, (state) => ({ tasks: [task, ...state.tasks] }));
    },

    getTaskByID(taskID: string) {
      return store.tasks().find((task) => task.id === taskID);
    },

    setStatusFilter(statusFilter: TaskStatusEnum | undefined) {
      patchState(store, { filters: { status: statusFilter } });
    },
  }))
);
