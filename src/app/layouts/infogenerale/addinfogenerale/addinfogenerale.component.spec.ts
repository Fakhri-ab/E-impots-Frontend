import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinfogeneraleComponent } from './addinfogenerale.component';

describe('AddinfogeneraleComponent', () => {
  let component: AddinfogeneraleComponent;
  let fixture: ComponentFixture<AddinfogeneraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddinfogeneraleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinfogeneraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
