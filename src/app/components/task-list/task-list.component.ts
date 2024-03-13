import { Component, computed, inject } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  store = inject(TaskService).taskStore;
  filteredTasks = computed(() => {
    const tasks = this.store().tasks;
    const filters = this.store().filters;
    if (!filters.statusFilter) {
      return tasks;
    }

    return tasks.filter((task) => task.status === filters.statusFilter);
  });
}
