import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MlModelService } from '../../../service/ml-model.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { ApiUrlConstants } from '../../../common/constants/apiUrl.constants';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-tokenization',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatTabsModule],
  templateUrl: './tokenization.component.html',
  styleUrl: './tokenization.component.css'
})
export class TokenizationComponent {

  Tokenization: any[] = [];
  tokenizationText: any;
  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];

  FileTokenization: any[] = [];
  RemoveStopwordTokenization: any[] = [];
  stemmedwords: any[] = [];
  pos: any[] = [];
  LemmatizeWord: any[] = [];
  grams: any[] = [];
  result: any;
  status: "initial" | "uploading" | "success" | "fail" = "initial";
  file: File | null = null;

  ngram: number=2;

  imageData: any;
  imagePlotUrl: SafeUrl | undefined;
  results: any;
  imageWcUrl: SafeUrl | undefined;
  wordcloudtext: string='';
  constructor(private service: MlModelService, private sanitizer: DomSanitizer) {
  }

  getAllTokenization(searchText: string) {
    this.service.getAllTokenization(searchText).subscribe(responce => {
      if (responce.StatusCode == "201") {
        var tokens = responce.tokenize;
        this.Tokenization = responce.tokenize;
      }
    })
  }
  // On file Select
  onChange(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.status = "initial";
      this.file = file;
    }
  }

  onUpload() {

    if (this.file) {
      const formData = new FormData();
      formData.append("file", this.file, this.file.name);

      this.service.getAllFileTokenization(this.file).subscribe(responce => {
        this.result = JSON.parse(JSON.stringify(responce)).body;
        var tokens = this.result.tokenize;
        var StopWord = this.result.filtered_Stop_words;

        this.FileTokenization = tokens;
        this.RemoveStopwordTokenization = StopWord;
        this.stemmedwords = this.result.stemmed_words;
        this.LemmatizeWord = this.result.LemmatizeWord;
      });
    }
  }

  Getpos() {
    if (this.file) {
      const formData = new FormData();
      formData.append("file", this.file, this.file.name);

      this.service.pos(this.file).subscribe(responce => {
        this.result = JSON.parse(JSON.stringify(responce)).body;
        this.pos = this.result.PartOfSpeach;
      });
    }
  }

  getAllNgramTokenization(ngram:number) {
    if (this.file) {
      const formData = new FormData();
      formData.append("file", this.file, this.file.name);

      this.service.getAllNgramTokenization(this.file, ngram).subscribe(responce => {
        this.result = JSON.parse(JSON.stringify(responce)).body;
        this.grams = this.result.ngrams;
      });
    }
  }

  generateWordcloudGet(text: string) {
    this.service.generateWordcloudGet(text).subscribe(blob => {
      const objectURL = URL.createObjectURL(blob);
      this.imageWcUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    });
  }
  GetPlotFromFile() {
    if (this.file) {
      const formData = new FormData();
      formData.append("file", this.file, this.file.name);
      this.service.GetPlotFromFile(this.file).subscribe(blob => {
        const objectURL = URL.createObjectURL(blob);
        this.imagePlotUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      });
    }
  }
}
