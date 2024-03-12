import { Component, input } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { Task } from '../../models/task.model';
import {RouterLink} from "@angular/router";

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
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  task = input.required<Task>();
}
