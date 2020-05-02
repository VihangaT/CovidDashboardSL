import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeImagSliderComponent } from './welcome-imag-slider.component';

describe('WelcomeImagSliderComponent', () => {
  let component: WelcomeImagSliderComponent;
  let fixture: ComponentFixture<WelcomeImagSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeImagSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeImagSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
