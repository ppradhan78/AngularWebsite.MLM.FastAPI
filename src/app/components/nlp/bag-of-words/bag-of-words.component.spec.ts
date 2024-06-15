import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagOfWordsComponent } from './bag-of-words.component';

describe('BagOfWordsComponent', () => {
  let component: BagOfWordsComponent;
  let fixture: ComponentFixture<BagOfWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BagOfWordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BagOfWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
