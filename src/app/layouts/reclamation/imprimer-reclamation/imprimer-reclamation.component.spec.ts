import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerReclamationComponent } from './imprimer-reclamation.component';

describe('ImprimerReclamationComponent', () => {
  let component: ImprimerReclamationComponent;
  let fixture: ComponentFixture<ImprimerReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprimerReclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimerReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
