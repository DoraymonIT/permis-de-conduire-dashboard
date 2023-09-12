import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../services/candidate.service';
import { ExamDate } from '../models/examDate.model';


@Component({
  selector: 'app-exam-date-list',
  templateUrl: './exam-date-list.component.html',
  styleUrls: ['./exam-date-list.component.css'],
})
export class ExamDateListComponent implements OnInit {
  examDates!: ExamDate[];

  constructor(private candidateService: CandidateService) {}

  ngOnInit(): void {
    // Chargez la liste des dates d'examen depuis le service
    this.examDates = this.candidateService.getExamDates();
  }
}
