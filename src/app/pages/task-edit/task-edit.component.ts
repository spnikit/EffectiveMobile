import { Component, Input as RouterInput } from '@angular/core';
import {TaskDetailsComponent} from "../../components/task-details/task-details.component";

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [TaskDetailsComponent],
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.scss',
})
export class TaskEditComponent {
  @RouterInput() id!: string;
}
