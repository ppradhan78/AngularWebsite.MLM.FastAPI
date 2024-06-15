import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MlModelService } from '../../../service/ml-model.service';
import { MatTabsModule } from '@angular/material/tabs';
@Component({
  selector: 'app-tokenization',
  standalone: true,
  imports: [FormsModule, MatTabsModule],
  templateUrl: './tokenization.component.html',
  styleUrl: './tokenization.component.css'
})
export class TokenizationComponent {

  Tokenization: any[] = [];
  tokenizationText: any;
  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];

  //Tokenize file
  //fileInfos?: Observable<any>;
  FileTokenization: any[] = [];
  RemoveStopwordTokenization: any[] = [];
  stemmedwords: any[] = [];
  pos: any[] = [];

  result: any;
  status: "initial" | "uploading" | "success" | "fail" = "initial";
  file: File | null = null;

  constructor(private service: MlModelService) {
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
      });
    }
  }

  Getpos() {
    if (this.file) {
      const formData = new FormData();
      formData.append("file", this.file, this.file.name);

      this.service.pos(this.file).subscribe(responce => {
        this.result = JSON.parse(JSON.stringify(responce)).body;
        this.pos = this.result.POS;
      });
    }
  }
}
