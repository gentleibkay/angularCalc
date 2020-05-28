import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Easy Calculator';
  mainInput = '';
  subAnswer = '';
  operatorKeys = ['/', 'x', '-', '+', '%'];

  keyPress(key: string) {
    if (this.operatorKeys.includes(key)) {
      const lastKey = this.mainInput[this.mainInput.length - 1];
      if (this.operatorKeys.includes(lastKey) || this.mainInput === '') {
        return;
      }
    }
    this.mainInput += key;
  }

  getResult() {
      try {
        this.subAnswer = this.mainInput;
        let tempMainInput = this.mainInput;
        tempMainInput = String(tempMainInput).replace('x', '*');
        this.mainInput = eval(tempMainInput);
      } catch (error) {
        this.mainInput = 'ERROR';
        this.subAnswer = error.message;
      }
  }

  clearAll () {
    this.mainInput = '';
    this.subAnswer = '';
  }

}
