import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Assurez-vous que ReactiveFormsModule est importé
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Assurez-vous d'importer le module de routage

import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { ExamDateListComponent } from './exam-date-list/exam-date-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { MatButtonModule } from '@angular/material/button'; // Importer le module Button
import { MatInputModule } from '@angular/material/input'; // Importer le module Input
import { MatTableModule } from '@angular/material/table'; // Importer le module Table
import { MatSelectModule } from '@angular/material/select';
import { PaymentComponent } from './payment/payment.component'; // Importer le module Table

@NgModule({
  declarations: [
    AppComponent,
    CandidateListComponent,
    ExamDateListComponent,
    RegistrationComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // Importez FormsModule pour ngModel
    ReactiveFormsModule, // Importez ReactiveFormsModule pour les formulaires réactifs
    RouterModule,
    AppRoutingModule, // Importez le module de routage principal
    MatButtonModule, // Ajouter le module Button à vos imports
    MatInputModule, // Ajouter le module Input à vos imports
    MatTableModule, // Ajouter le module Table à vos imports
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
