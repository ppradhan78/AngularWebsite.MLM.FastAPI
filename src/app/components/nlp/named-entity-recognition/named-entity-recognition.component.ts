import { Component } from '@angular/core';
import { MlModelService } from '../../../service/ml-model.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-named-entity-recognition',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatTabsModule],
  templateUrl: './named-entity-recognition.component.html',
  styleUrl: './named-entity-recognition.component.css'
})
export class NamedEntityRecognitionComponent {
  NamedEntity: any[] = [];
  result: any;
  status: "initial" | "uploading" | "success" | "fail" = "initial";
  file: File | null = null;
  constructor(private service: MlModelService) {
  }

  onChange(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.status = "initial";
      this.file = file;
    }
  }

  GetNamedEntity() {
    if (this.file) {
      const formData = new FormData();
      formData.append("file", this.file, this.file.name);

      this.service.GetNamedEntity(this.file).subscribe(responce => {
        this.result = JSON.parse(JSON.stringify(responce)).body;
        this.NamedEntity = this.result.NamedEntity;
      });
    }
  }
}
