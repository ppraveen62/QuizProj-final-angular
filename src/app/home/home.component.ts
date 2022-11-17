import { Component, OnInit } from '@angular/core';
import { StatQuizComponent } from '../stat-quiz/stat-quiz.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  TotalnoOfqsn:number= StatQuizComponent.QsnTotal;

  //mention the time in minutes for test here

  public static TimeInMinutes:number=3;
  time:number=HomeComponent.TimeInMinutes


}
