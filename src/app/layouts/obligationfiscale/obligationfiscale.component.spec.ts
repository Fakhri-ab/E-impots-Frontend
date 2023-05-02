import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObligationfiscaleComponent } from './obligationfiscale.component';

describe('ObligationfiscaleComponent', () => {
  let component: ObligationfiscaleComponent;
  let fixture: ComponentFixture<ObligationfiscaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObligationfiscaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObligationfiscaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
