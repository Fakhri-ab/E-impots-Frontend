import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDeclarationIRPPComponent } from './liste-declaration-irpp.component';

describe('ListeDeclarationIRPPComponent', () => {
  let component: ListeDeclarationIRPPComponent;
  let fixture: ComponentFixture<ListeDeclarationIRPPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDeclarationIRPPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDeclarationIRPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
