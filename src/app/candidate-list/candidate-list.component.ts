import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../services/candidate.service';
import { Candidate } from '../models/candidate.model';


@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css'],
})
export class CandidateListComponent implements OnInit {
  candidates!: Candidate[];
  filteredCandidates!: Candidate[]; // Tableau pour stocker les candidats filtrés
  filterText: string = ''; // La chaîne de recherche

  constructor(private candidateService: CandidateService) {}

  ngOnInit(): void {
    this.candidates = this.candidateService.getCandidates();
    this.filteredCandidates = this.candidates; // Initialisez le tableau filtré avec tous les candidats
  }

  // Fonction pour effectuer le filtrage
  applyFilter() {
    this.filteredCandidates = this.candidates.filter((candidate) =>
      candidate.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  // Fonction pour réinitialiser le filtrage
  clearFilter() {
    this.filterText = '';
    this.filteredCandidates = this.candidates;
  }

  // Fonction pour trier les candidats par nom
  sortByName() {
    this.filteredCandidates.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }
}
