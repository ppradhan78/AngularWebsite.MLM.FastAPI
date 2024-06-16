import { Component } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { TokenizationComponent } from './tokenization/tokenization.component';
import { SummarizationComponent } from './summarization/summarization.component';
import { BagOfWordsComponent } from './bag-of-words/bag-of-words.component';
import { PatternOrPhraseMatcherComponent } from './pattern-or-phrase-matcher/pattern-or-phrase-matcher.component';
import { NamedEntityRecognitionComponent } from './named-entity-recognition/named-entity-recognition.component';
@Component({
  selector: 'app-nlp',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, TokenizationComponent, SummarizationComponent, BagOfWordsComponent,
    PatternOrPhraseMatcherComponent, NamedEntityRecognitionComponent],
  templateUrl: './nlp.component.html',
  styleUrl: './nlp.component.css'
})
export class NlpComponent {

  public tokenizationLoaded: boolean = true;
  summarizationLoad: boolean = true;
  bowLoad: boolean = true;
  patternOrPhraseMatcherLoad = true;
 namedEntityRecognitionLoad = true;

  constructor() {
  }
  loadTokenizationComponent() {
    this.tokenizationLoaded = false
    this.summarizationLoad = true
    this.bowLoad = true;
    this.patternOrPhraseMatcherLoad = true;
  }

  loadSummarizationComponent() {
    this.summarizationLoad = false
    this.tokenizationLoaded = true
    this.bowLoad = true;
    this.patternOrPhraseMatcherLoad = true;
    this.namedEntityRecognitionLoad = true;


  }

  loadBowComponent() {
    this.summarizationLoad = true;
    this.tokenizationLoaded = true
    this.patternOrPhraseMatcherLoad = true;
    this.namedEntityRecognitionLoad = true;
    this.bowLoad = false;
  }

  loadpatternOrPhraseMatcherComponent() {
    this.summarizationLoad = true;
    this.tokenizationLoaded = true
    this.bowLoad = true;
    this.namedEntityRecognitionLoad = true;
    this.patternOrPhraseMatcherLoad = false;
  }
  loadnamedEntityRecognitionComponent() {
    this.summarizationLoad = true;
    this.tokenizationLoaded = true
    this.bowLoad = true;
    this.patternOrPhraseMatcherLoad = true;
    this.namedEntityRecognitionLoad = false;
  }
}
