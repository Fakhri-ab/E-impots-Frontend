import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontdetailReclamationComponent } from './frontdetail-reclamation.component';

describe('FrontdetailReclamationComponent', () => {
  let component: FrontdetailReclamationComponent;
  let fixture: ComponentFixture<FrontdetailReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontdetailReclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontdetailReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
