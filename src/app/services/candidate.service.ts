// candidate.service.ts
import { Injectable } from '@angular/core';
import { Candidate } from '../models/candidate.model'; // Import the Candidate model
import { ExamDate } from '../models/examDate.model'; // Import the ExamDate model

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  private candidates: Candidate[] = [];
  private examDates: ExamDate[] = [];

  constructor() {
    // Initialisation des données fictives
    this.candidates = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ];

    this.examDates = [
      { id: 1, date: new Date(2023, 8, 15), price: 50 },
      { id: 2, date: new Date(2023, 8, 20), price: 60 },
    ];
  }

  getCandidates(): Candidate[] {
    return this.candidates;
  }

  getExamDates(): ExamDate[] {
    return this.examDates;
  }
}
