import { Component, inject } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButton } from '@angular/material/button';
import {
  Assignee,
  Task,
  TaskPriority,
  TaskPriorityEnum,
  TaskStatus,
  TaskStatusEnum,
} from '../../models/task.model';
import { ASSIGNEES, TASK_PRIORITY, TASK_STATUS } from '../../models/constants';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-create',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    FormsModule,
    MatButton,
    ReactiveFormsModule,
  ],
  providers: [provideNativeDateAdapter()],

  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.scss',
})
export class TaskCreateComponent {
  #fb = inject(FormBuilder);
  #taskService = inject(TaskService);
  #router = inject(Router);

  priority: TaskPriority[] = TASK_PRIORITY;
  status: TaskStatus[] = TASK_STATUS;
  assignees: Assignee[] = ASSIGNEES;

  form = this.#fb.nonNullable.group({
    title: '',
    name: '',
    dueDate: new Date(),
    priority: TaskPriorityEnum.low,
    status: TaskStatusEnum.idle,
    assignees: [],
  });

  onCancel() {
    this.form.reset();
  }

  onSave() {
    if (this.form.valid && this.form.touched) {
      const task: Task = {
        ...this.form.getRawValue(),
        id: crypto.randomUUID(),
        dueTo: this.form.getRawValue().dueDate.toISOString(),
      };
      this.#taskService.createTask(task);
      this.form.reset();
      this.#router.navigate(['/']);
    }
  }
}
