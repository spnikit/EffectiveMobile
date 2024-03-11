import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggle} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'effective-mobile';
}


/*
* pick components from material
* add models +
* add dummy data
* list component
* edit component
* create (via dialog)
* routing
* ?ngrx signal store
* */
