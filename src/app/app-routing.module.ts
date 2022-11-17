import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatQuizComponent } from './stat-quiz/stat-quiz.component';
import { HomeComponent } from './home/home.component';
import { FinishComponent } from './finish/finish.component';


const routes: Routes = [
  {path:'',
  component:HomeComponent},
  {path:'start',
  component:StatQuizComponent},
  {path:'finish',
  component:FinishComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
