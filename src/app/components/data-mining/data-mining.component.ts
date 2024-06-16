import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './data-mining.component.html',
  styleUrl: './data-mining.component.css'
})
export class DataMiningComponent {

}
