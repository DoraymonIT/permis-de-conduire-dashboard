import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidateService } from '../services/candidate.service';
import { ExamDate } from '../models/examDate.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  examDates!: ExamDate[] ; // Déclarez un tableau pour stocker les dates d'examen

  constructor(private fb: FormBuilder, private candidateService: CandidateService) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      selectedExamDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Chargez les dates d'examen depuis le service
    this.examDates = this.candidateService.getExamDates();
  }

  onSubmit() {
    // Récupérez les données du formulaire
    const formData = this.registrationForm.value;

    // Ajoutez ici la logique pour traiter l'inscription, par exemple, en utilisant votre service
  }
}
