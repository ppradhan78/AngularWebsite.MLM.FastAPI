import { Component } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { TokenizationComponent } from './tokenization/tokenization.component';
import { SummarizationComponent } from './summarization/summarization.component';
@Component({
  selector: 'app-nlp',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, TokenizationComponent, SummarizationComponent],
  templateUrl: './nlp.component.html',
  styleUrl: './nlp.component.css'
})
export class NlpComponent {

  public tokenizationLoaded: boolean = true;
  summarizationLoad: boolean = true;

  constructor() {
  }
  loadTokenizationComponent() {
    this.tokenizationLoaded = false
    this.summarizationLoad = true
  }

  loadSummarizationComponent() {
    this.summarizationLoad = false
    this.tokenizationLoaded = true
  }
}
