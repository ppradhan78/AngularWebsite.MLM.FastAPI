import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedEntityRecognitionComponent } from './named-entity-recognition.component';

describe('NamedEntityRecognitionComponent', () => {
  let component: NamedEntityRecognitionComponent;
  let fixture: ComponentFixture<NamedEntityRecognitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NamedEntityRecognitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NamedEntityRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
