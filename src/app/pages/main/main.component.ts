import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChip } from '@angular/material/chips';
import { TaskStatusEnum } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    TaskListComponent,
    MatButton,
    RouterLink,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatChip,
    ReactiveFormsModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  filterControl: FormControl<TaskStatusEnum | undefined> = new FormControl();
  taskService = inject(TaskService);
  protected readonly TaskStatusEnum = TaskStatusEnum;
  #destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.filterControl.valueChanges
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((filter) => this.taskService.setStatusFilter(filter));
  }
}
