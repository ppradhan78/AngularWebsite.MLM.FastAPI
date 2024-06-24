import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './machine-learning.component.html',
  styleUrl: './machine-learning.component.css'
})
export class MachineLearningComponent {

  constructor(@Inject(DOCUMENT) private document: Document) { }
  gotoJupyterExp(): void {
    this.document.location.href = 'https://outcomerecommendations.onrender.com/';
  }

}
