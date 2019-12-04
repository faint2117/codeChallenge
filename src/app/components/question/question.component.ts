import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: any;
  @Output() timerEvent = new EventEmitter();
  secondsTimer;
  @Input() isReadOnly = false;
  private questionAnswers;
  private validJsFrameworksAnswers = 'AngularJS,Ember,VueJS';

  constructor() { }

  public isValidAnswer(option) {
    return this.isReadOnly && this.isNotEmptyAnswer(this.question.answer) && this.validateAnswer(this.question.answer, option);
  }

  public validateAnswers(options:Array<any>) {
    return this.validJsFrameworksAnswers === this.questionAnswers;
  }

  private isNotEmptyAnswer(answer) {
    return  answer && answer.length;
  }

  private validateAnswer(answer, option) {
    return answer === option;
  }

  private reverseWordWithOutSpaces(str:string){
    return str.split('').reverse().join('');
  }

  ngOnInit() {
    if(this.question.timer && !this.isReadOnly) {
      const source = timer(1000, 1000);
      const subscribe = source.subscribe(val => { 
        this.secondsTimer = this.question.timer - (val);
      });
      setTimeout(() => { 
        subscribe.unsubscribe(); 
        this.timerEvent.emit();
      }, (this.question.timer+1) * 1000);
    }

    if(this.question.type === 'multipleOption'){
      this.questionAnswers = this.question.options.filter(x=> x.checked).map(x => x.text).join(',');
    }
  }

  isPalindrome(str:string, str2?:string) {
    if(str2){
      const string2Reverse = this.reverseWordWithOutSpaces(str2).toLowerCase();
      return str.toLowerCase() === string2Reverse;
    } else {
      return this.reverseWordWithOutSpaces(str) === str;
    }
  }

}
