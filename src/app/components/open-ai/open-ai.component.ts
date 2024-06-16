import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './open-ai.component.html',
  styleUrl: './open-ai.component.css'
})
export class OpenAIComponent {

}
