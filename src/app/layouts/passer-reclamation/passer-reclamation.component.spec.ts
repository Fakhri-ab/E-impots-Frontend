import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasserReclamationComponent } from './passer-reclamation.component';

describe('PasserReclamationComponent', () => {
  let component: PasserReclamationComponent;
  let fixture: ComponentFixture<PasserReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasserReclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasserReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
