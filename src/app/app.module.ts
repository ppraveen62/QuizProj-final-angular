import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatQuizComponent } from './stat-quiz/stat-quiz.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { FinishComponent } from './finish/finish.component';


@NgModule({
  declarations: [
    AppComponent,
    StatQuizComponent,
    HomeComponent,
    FinishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
