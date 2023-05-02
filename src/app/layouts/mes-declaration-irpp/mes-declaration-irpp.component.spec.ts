import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDeclarationIRPPComponent } from './mes-declaration-irpp.component';

describe('MesDeclarationIRPPComponent', () => {
  let component: MesDeclarationIRPPComponent;
  let fixture: ComponentFixture<MesDeclarationIRPPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesDeclarationIRPPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesDeclarationIRPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
