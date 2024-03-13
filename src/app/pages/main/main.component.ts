import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChip } from '@angular/material/chips';
import { TaskStatusEnum, TaskStatusOption } from '../../models/task.model';
import { TaskStore } from '../../store/task.store';
import { StatusFilterComponent } from '../../components/status-filter/status-filter.component';
import { FILTER_STATUS_OPTIONS } from '../../models/constants';

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
    StatusFilterComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  protected readonly TaskStatusEnum = TaskStatusEnum;
  filterOptions: TaskStatusOption[] = FILTER_STATUS_OPTIONS;

  #taskStore = inject(TaskStore);
  #destroyRef = inject(DestroyRef);

  ngOnInit() {
    // this.filterControl.valueChanges
    //   .pipe(takeUntilDestroyed(this.#destroyRef))
    //   .subscribe((filter) => this.#taskStore.setStatusFilter(filter));
  }

  onFilterStatusChange(filterStatusVal: any) {
    console.log(filterStatusVal)
    this.#taskStore.setStatusFilter(filterStatusVal);
  }
}
