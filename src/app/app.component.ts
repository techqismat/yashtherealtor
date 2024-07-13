import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './features/home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  public slides = [
    { src: "assets/images/house1.jpg" },
    { src: "assets/images/house2.jpg" },
    { src: "assets/images/house3.jpeg" }
  ];

  constructor() {}

  onClick() {
    console.log("presenting menu screen");
  }
}
