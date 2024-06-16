import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternOrPhraseMatcherComponent } from './pattern-or-phrase-matcher.component';

describe('PatternOrPhraseMatcherComponent', () => {
  let component: PatternOrPhraseMatcherComponent;
  let fixture: ComponentFixture<PatternOrPhraseMatcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatternOrPhraseMatcherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatternOrPhraseMatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
