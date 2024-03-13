import { Component, inject, input, OnInit } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [DatePipe],
  providers: [provideNativeDateAdapter()],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss',
})
export class TaskDetailsComponent implements OnInit {
  task!: Task;
  id = input.required<string>();
  #taskService = inject(TaskService);

  ngOnInit(): void {
    this.task = this.#taskService.getTaskByID(this.id());
  }
}
