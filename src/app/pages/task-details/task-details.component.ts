import { Component, computed, inject, input } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { TaskStore } from '../../store/task.store';
import {TaskCardComponent} from "../../components/task-card/task-card.component";

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [
    DatePipe,
    MatIcon,
    MatIconButton,
    MatTooltip,
    RouterLink,
    TaskCardComponent,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss',
})
export class TaskDetailsComponent {
  id = input.required<string>();
  task = computed(() => this.#taskStore.getTaskByID(this.id()));
  #taskStore = inject(TaskStore);
}
