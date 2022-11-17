import { Component, OnInit,Input } from '@angular/core';
import { StatQuizComponent } from '../stat-quiz/stat-quiz.component';
@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  questionsTotal:number= StatQuizComponent.QsnTotal;
  questionsAnswered:number=StatQuizComponent.QsnAnswered;
  rightAnswered: number =StatQuizComponent.RightAnswered;
  wrongAnswered: number=StatQuizComponent.QsnAnswered-StatQuizComponent.RightAnswered;

  submit(){
    window.location.replace("");
   
  }




}
