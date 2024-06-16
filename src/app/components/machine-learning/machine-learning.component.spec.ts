import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineLearningComponent } from './machine-learning.component';


describe('MachineLearningComponent', () => {
  let component: MachineLearningComponent;
  let fixture: ComponentFixture<MachineLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineLearningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MachineLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
