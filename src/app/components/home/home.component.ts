import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router'

import {Question} from '../../shared/models/question.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private questions: Array<Question> = [ {id: 1, questionText: 'How do you describe yourself as a developer?', options: ['Hermit','Sociable', 'Serious','Grumpy','do not know yet'], type: 'singleOption', timer: 10, active : true},
  {id:2, questionText: 'Select the JavaScript based technologies:', options: [{text: 'AngularJS', checked: false}, {text: 'Ember', checked: false}, {text: 'VueJS', checked: false}, {text: 'Java', checked: false}, {text: 'C#', checked: false}], type: 'multipleOption', timer: 10},
  {id:3, questionText: 'Please introduce a palindrome', type: 'singleTextbox'}, {id:4,  questionText: 'Please introduce a sentence in the first textbox and the same sentence in reverse in the second texbox', type: 'twoTextbox'} ];

  progressBarValue:number = 0;
  buttonText = 'Next';
  private progressBarUnit;

  constructor(private router:Router) { }

  ngOnInit() {
    this.progressBarUnit = (100 / this.questions.length);
    this.progressBarValue = this.progressBarUnit;
  }

  nextQuestion() {
    let currentQuestion = this.questions.find(x => x.active);

    if(currentQuestion.id === this.questions.length) {
      this.router.navigateByUrl('results', { state: this.questions });
      return;
    }
    this.progressBarValue += this.progressBarUnit;
    if(currentQuestion.id === this.questions.length -1){
      this.buttonText = 'Finish';
    }
    currentQuestion.active = false;
    let nextQuestion = this.questions.find(x => x.id == currentQuestion.id + 1);
    nextQuestion.active = true;
  }

}
