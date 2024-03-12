import { Component } from '@angular/core';
import {TaskListComponent} from "../../components/task-list/task-list.component";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TaskListComponent, MatButton, RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
