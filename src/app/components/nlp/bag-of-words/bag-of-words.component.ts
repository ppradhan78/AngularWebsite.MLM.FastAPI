import { Component } from '@angular/core';
import { MlModelService } from '../../../service/ml-model.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-bag-of-words',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule],
  templateUrl: './bag-of-words.component.html',
  styleUrl: './bag-of-words.component.css'
})
export class BagOfWordsComponent {

  result: any;
  status: "initial" | "uploading" | "success" | "fail" = "initial";

  file: File | null = null;
  BoW: any[] = [];
  freq_words: any[] = [];
  word2count: any[] = [];


  constructor(private service: MlModelService) {
  }

  onChange(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.status = "initial";
      this.file = file;
    }
  }

  GetBoW() {

    if (this.file) {
      const formData = new FormData();
      formData.append("file", this.file, this.file.name);

      this.service.GetBoW(this.file).subscribe(responce => {
        this.result = JSON.parse(JSON.stringify(responce)).body;

        this.BoW = this.result.BoW;
        this.freq_words = this.result.freq_words;
        this.word2count = this.result.WordCount;

      });
    }
  }
}
