import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackComponent } from './feedback.component';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form controls', () => {
    expect(component.title).toBeDefined();
    expect(component.description).toBeDefined();
    expect(component.name).toBeDefined();
    expect(component.email).toBeDefined();
    expect(component.phone).toBeDefined();
    expect(component.termsAndConditions).toBeDefined();
  });

  it('should navigate to home on cancel', () => {
    const routerSpy = spyOn(component['router'], 'navigate'); // Käytä komponentin omaa routeria
    component.cancel();
    expect(routerSpy).toHaveBeenCalledWith(['home']);
  });
});