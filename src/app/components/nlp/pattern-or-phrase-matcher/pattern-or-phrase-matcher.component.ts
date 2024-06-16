import { Component } from '@angular/core';
import { MlModelService } from '../../../service/ml-model.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-pattern-or-phrase-matcher',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatTabsModule],
  templateUrl: './pattern-or-phrase-matcher.component.html',
  styleUrl: './pattern-or-phrase-matcher.component.css'
})
export class PatternOrPhraseMatcherComponent {
  phrases: any[] = [];
  result: any;
  status: "initial" | "uploading" | "success" | "fail" = "initial";
  file: File | null = null;
  phrase: string = '';
  constructor(private service: MlModelService) {
  }

  onChange(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.status = "initial";
      this.file = file;
    }
  }

  GetPhraseMatcher(ngram: string) {
    if (this.file) {
      const formData = new FormData();
      formData.append("file", this.file, this.file.name);

      this.service.GetPhraseMatcher(this.file, ngram).subscribe(responce => {
        this.result = JSON.parse(JSON.stringify(responce)).body;
        this.phrases = this.result.phrases;
      });
    }
  }
}
