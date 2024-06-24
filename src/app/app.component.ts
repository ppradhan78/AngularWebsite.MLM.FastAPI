import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router'
import { HeaderComponent } from './components/header/header.component';
import { NlpComponent } from './components/nlp/nlp.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { TokenizationComponent } from './components/nlp/tokenization/tokenization.component';
import { DeepLearningComponent } from './components/deep-learning/deep-learning.component';
import { DataMiningComponent } from './components/data-mining/data-mining.component';
import { OpenAIComponent } from './components/open-ai/open-ai.component';
import { MachineLearningComponent } from './components/machine-learning/machine-learning.component';
import { DataAnalysisComponent } from './components/data-analysis/data-analysis.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, NlpComponent,
    DataMiningComponent, OpenAIComponent, DataAnalysisComponent,
    MachineLearningComponent, NavComponent, FooterComponent, TokenizationComponent, DeepLearningComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website';
}
