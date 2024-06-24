import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-data-analysis',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './data-analysis.component.html',
  styleUrl: './data-analysis.component.css'
})
export class DataAnalysisComponent {

}
