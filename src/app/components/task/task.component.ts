import { Component, input } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent, MatCardFooter,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { Task, TaskStatusEnum } from '../../models/task.model';
import { RouterLink } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardActions,
    MatButton,
    MatCardTitle,
    MatCardSubtitle,
    RouterLink,
    MatCardContent,
    MatChipsModule,
    NgClass,
    MatCardFooter,
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  task = input.required<Task>();

  get class() {
    switch (this.task().status) {
      case TaskStatusEnum.idle:
        return 'idle';
      case TaskStatusEnum.inProgress:
        return 'in-progress';
      case TaskStatusEnum.done:
        return 'done';
      default:
        return 'idle';
    }
  }
}
