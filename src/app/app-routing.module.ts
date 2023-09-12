import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { ExamDateListComponent } from './exam-date-list/exam-date-list.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  // { path: '', redirectTo: '/candidates', pathMatch: 'full' },
  { path: 'candidates', component: CandidateListComponent },
  { path: 'exam-dates', component: ExamDateListComponent },
  { path: 'registration', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
