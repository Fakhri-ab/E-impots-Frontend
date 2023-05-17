import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackOfficeDeclarationTvaComponent } from './back-office-declaration-tva.component';

describe('BackOfficeDeclarationTvaComponent', () => {
  let component: BackOfficeDeclarationTvaComponent;
  let fixture: ComponentFixture<BackOfficeDeclarationTvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackOfficeDeclarationTvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackOfficeDeclarationTvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
