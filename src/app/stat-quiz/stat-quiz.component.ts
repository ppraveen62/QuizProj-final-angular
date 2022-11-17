import { FinishComponent } from './../finish/finish.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import questionData from '../../assets/questions.json';
import answerData from '../../assets/answers.json';
import { interval, Subscription, takeUntil, timeout, timer } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';



interface question {
  questionNo: Number,
  questionDesc: String,
  choice1: String,
  choice2: String,
  choice3: String,
  choice4: String,

}

interface answer {
  questionNo: Number,
  answer: String,

}

@Component({
  selector: 'app-stat-quiz',
  templateUrl: './stat-quiz.component.html',
  styleUrls: ['./stat-quiz.component.css']
}

)

export class StatQuizComponent implements OnInit {
  qsn: question[] = questionData;
  ans: answer[] = answerData;

  userAnswerlist: String[] = [];
  choiceRes: String = "";
  i: number = 0;

  public static QsnTotal: number = questionData.length;
  public static QsnAnswered: number = 0;
  public static RightAnswered: number = 0;

  //countdown

  startingMinutes: number =HomeComponent.TimeInMinutes ;
  time: number = this.startingMinutes * 60;
  countdownEl = <HTMLInputElement>document.getElementById("countdown");
  Minutes: any = 0;
  Seconds: any = 0;

  subs: Subscription = new Subscription;
  

  ///

  constructor(private router: Router) { }

  ngOnInit(): void {

    //
    const obs = interval(1000);
    this.subs = obs.subscribe((d) => {
      const minutes = Math.floor(this.time / 60);
      let seconds = this.time % 60;
      this.Minutes = minutes
      this.Seconds = seconds
      this.time--;

      if ((this.startingMinutes * 60) == d) {
        this.subs.unsubscribe();
        this.submit();
        this.router.navigate(["/finish"])
      }
    })


  }

  reset() {
    let e1 = <HTMLInputElement>document.getElementById('a');
    e1.checked = false
    let e2 = <HTMLInputElement>document.getElementById('b');
    e2.checked = false
    let e3 = <HTMLInputElement>document.getElementById('c');
    e3.checked = false
    let e4 = <HTMLInputElement>document.getElementById('d');
    e4.checked = false
  }

  submit(): void {
    

    for (let i = 0; i < this.qsn.length; i++) {
      if (this.ans[i].answer == this.userAnswerlist[i]) {
        StatQuizComponent.RightAnswered++;
      }
      if (this.userAnswerlist[i] == "A" || this.userAnswerlist[i] == "B" || this.userAnswerlist[i] == "C" || this.userAnswerlist[i] == "D") {
        StatQuizComponent.QsnAnswered++;
      }

    }
   



  }

  previousQuestion(): void {

    if (this.i > 0 || this.i < this.qsn.length - 1) {
 
      this.i--;
    }
    if (this.i != this.qsn.length - 1) {
      let element = <HTMLInputElement>document.getElementById('nextOption');
      element.disabled = false;
    }
    if (this.i == 0) {
      let element = <HTMLInputElement>document.getElementById('previousOption');
      element.disabled = true;
    }
    this.reset();
  }

  nextQuestion(): void {

    if (this.i == 0 || this.i < this.qsn.length - 1) {
      console.log(this.i);
      this.i++;
      let element = <HTMLInputElement>document.getElementById('previousOption');
      element.disabled = false;
    }
    if (this.i == this.qsn.length - 1) {
      let element = <HTMLInputElement>document.getElementById('nextOption');
      element.disabled = true;
    }
    if (this.i == 0) {
      let element = <HTMLInputElement>document.getElementById('previousOption');
      element.disabled = true;
    }
    this.reset();

    if (this.i == this.qsn.length - 1) {
      let element = <HTMLInputElement>document.getElementById('submitOption');
      element.disabled = false;
    }

  }


  RadioHandler(e: any) {
    let answer = e.target.value;
    this.userAnswerlist[this.i] = answer;
    console.log(this.userAnswerlist);
  }







}


