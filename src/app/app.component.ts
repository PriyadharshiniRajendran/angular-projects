import { Component } from '@angular/core';

@Component({
  selector: 'app-priya',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'suren priya';
  name = "suren"
  num1 = 1000;
  num2 = 400;

  displayDate = function()
  {
    return new Date;
  }
}
