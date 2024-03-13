import {Component, input} from '@angular/core';
import { Task } from '../../models/task.model';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  task = input.required<Task>();
}
