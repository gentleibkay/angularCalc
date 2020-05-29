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
  operatorKeys = ['/', 'x', '-', '+'];
  expression = '';

  keyPress(key: string) {
    const lastKey = String(this.expression).substr(-1);
    if (this.operatorKeys.includes(key)) {
      if (this.operatorKeys.includes(lastKey) && this.expression.length > 2) {
        this.expression = this.expression.substr(0, this.expression.length-1) + key;
        return;
      }

      if(this.expression.length){
        this.mainInput = this.expression;
        this.getResult();
      }
    } else {
      this.mainInput = (this.operatorKeys.includes(lastKey))? key : (this.mainInput + key);
    }
    
    this.expression += key;
  }

  getResult() {
      try {
        this.subAnswer = this.expression;
        let tempMainInput = this.expression;
        tempMainInput = String(tempMainInput).replace('x', '*');
        this.mainInput = eval(tempMainInput);
        this.expression = this.mainInput;
      } catch (error) {
        this.subAnswer = error.message;
      }
  }

  clearAll () {
    this.mainInput = '';
    this.subAnswer = '';
    this.expression = '';
  }

}
