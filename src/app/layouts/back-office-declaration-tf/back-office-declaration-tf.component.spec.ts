import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackOfficeDeclarationTfComponent } from './back-office-declaration-tf.component';

describe('BackOfficeDeclarationTfComponent', () => {
  let component: BackOfficeDeclarationTfComponent;
  let fixture: ComponentFixture<BackOfficeDeclarationTfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackOfficeDeclarationTfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackOfficeDeclarationTfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
