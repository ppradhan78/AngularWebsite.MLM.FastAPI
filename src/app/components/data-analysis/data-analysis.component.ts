import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-data-analysis',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './data-analysis.component.html',
  styleUrl: './data-analysis.component.css'
})
export class DataAnalysisComponent {
   constructor(@Inject(DOCUMENT) private document: Document) { }
  gotoOlympicDataAnalytics(): void {
    this.document.location.href = 'https://python-dataanalysis.onrender.com/';
  }
}
