import { Component, computed, inject, input } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { TaskService } from '../../services/task.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [DatePipe],
  providers: [provideNativeDateAdapter()],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss',
})
export class TaskDetailsComponent {
  id = input.required<string>();
  task = computed(() => this.#taskService.getTaskByID(this.id()));
  #taskService = inject(TaskService);
}
