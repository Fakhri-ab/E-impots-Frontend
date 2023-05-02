import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackofficedeclarationIRPPComponent } from './backofficedeclaration-irpp.component';

describe('BackofficedeclarationIRPPComponent', () => {
  let component: BackofficedeclarationIRPPComponent;
  let fixture: ComponentFixture<BackofficedeclarationIRPPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackofficedeclarationIRPPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackofficedeclarationIRPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
