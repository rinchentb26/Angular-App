import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  num1 = 0;
  num2 = 0;
  sum = 0
  addition = () => {
    this.sum = this.num1 + this.num2;
  }
  subtraction = () => {
    this.sum = this.num1 - this.num2;
  }
  division = () => {
    this.sum = this.num1 / this.num2;
  }
  multiplication = () => {
    this.sum = this.num1 * this.num2;
  }
  power = () => {
    this.sum = Math.pow(this.num1, this.num2);
  }



}

