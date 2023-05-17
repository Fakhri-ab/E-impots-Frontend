import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackItemTvaComponent } from './back-item-tva.component';

describe('BackItemTvaComponent', () => {
  let component: BackItemTvaComponent;
  let fixture: ComponentFixture<BackItemTvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackItemTvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackItemTvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
