import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-deep-learning',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './deep-learning.component.html',
  styleUrl: './deep-learning.component.css'
})
export class DeepLearningComponent {

}
