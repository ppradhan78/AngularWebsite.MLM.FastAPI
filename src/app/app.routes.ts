import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NlpComponent } from './components/nlp/nlp.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DeepLearningComponent } from './components/deep-learning/deep-learning.component';
import { DataMiningComponent } from './components/data-mining/data-mining.component';
import { OpenAIComponent } from './components/open-ai/open-ai.component';
import { MachineLearningComponent } from './components/machine-learning/machine-learning.component';
import { DataAnalysisComponent } from './components/data-analysis/data-analysis.component';

export const routes: Routes = [

  { title: "MLM | Home", path: '', component: HeaderComponent },
  { title: "MLM | Home", path: 'home', component: HeaderComponent },
  { title: "MLM | NLP", path: 'nlp', component: NlpComponent },
  { title: "MLM | DATA MINING", path: 'dm', component: DataMiningComponent },
  { title: "MLM | OPEN AI", path: 'oai', component: OpenAIComponent },
  { title: "MLM | MACHINE LEARNING", path: 'ml', component: MachineLearningComponent },
  { title: "MLM | DEEP LEARNING", path: 'dl', component: DeepLearningComponent },
  { title: "MLM | Data Analysis", path: 'da', component: DataAnalysisComponent },
  { title: "MLM | Not Found", path: '**', component: NotfoundComponent },

];
