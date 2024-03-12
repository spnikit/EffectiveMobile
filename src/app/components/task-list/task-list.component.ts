import { Component, inject } from '@angular/core';
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
  taskList = inject(TaskService).taskStore;
}
