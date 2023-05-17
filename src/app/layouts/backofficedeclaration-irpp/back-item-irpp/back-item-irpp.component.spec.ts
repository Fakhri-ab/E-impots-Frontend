import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackItemIrppComponent } from './back-item-irpp.component';

describe('BackItemIrppComponent', () => {
  let component: BackItemIrppComponent;
  let fixture: ComponentFixture<BackItemIrppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackItemIrppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackItemIrppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
