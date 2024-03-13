import { Component, input, OnInit, output } from '@angular/core';
import { TaskStatusEnum, TaskStatusOption } from '../../models/task.model';
import { MatChip } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-status-filter',
  standalone: true,
  imports: [
    MatChip,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './status-filter.component.html',
  styleUrl: './status-filter.component.scss',
})
export class StatusFilterComponent implements OnInit {
  filterControl: FormControl<TaskStatusEnum | undefined> = new FormControl();

  filterOptions = input<TaskStatusOption[]>();
  status = output<TaskStatusEnum | undefined>();

  ngOnInit() {
    this.filterControl.valueChanges.subscribe((val) => this.status.emit(val));
  }
}
