import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Easy Calculator';
  answer = '';
  inputter = "";

  processCalculation(){
    try {
      this.answer = eval(this.inputter)
    } catch (error) {
      this.answer = "Invalid expression"
    }
  }

}
