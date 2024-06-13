import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { MlModelService } from '../../../service/ml-model.service';

@Component({
  selector: 'app-tokenization',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tokenization.component.html',
  styleUrl: './tokenization.component.css'
})
export class TokenizationComponent {

  Tokenization: any[] = [];
  tokenizationText: any;
  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];
  fileInfos?: Observable<any>;

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
}
