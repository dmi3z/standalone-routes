import { Child2Component } from './../child_2/child_2.component';
import { RouterOutlet, provideRouter, RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  templateUrl: './child_1.component.html',
  standalone: true,
  imports: [RouterOutlet],
})
export class Child1Component {}
