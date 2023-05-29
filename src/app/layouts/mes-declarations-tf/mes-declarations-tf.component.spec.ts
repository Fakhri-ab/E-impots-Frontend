import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDeclarationsTFComponent } from './mes-declarations-tf.component';

describe('MesDeclarationsTFComponent', () => {
  let component: MesDeclarationsTFComponent;
  let fixture: ComponentFixture<MesDeclarationsTFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesDeclarationsTFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesDeclarationsTFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
