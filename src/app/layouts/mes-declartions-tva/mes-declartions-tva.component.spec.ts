import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDeclartionsTvaComponent } from './mes-declartions-tva.component';

describe('MesDeclartionsTvaComponent', () => {
  let component: MesDeclartionsTvaComponent;
  let fixture: ComponentFixture<MesDeclartionsTvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesDeclartionsTvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesDeclartionsTvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
