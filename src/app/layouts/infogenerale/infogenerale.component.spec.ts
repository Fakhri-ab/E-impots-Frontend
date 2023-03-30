import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfogeneraleComponent } from './infogenerale.component';

describe('InfogeneraleComponent', () => {
  let component: InfogeneraleComponent;
  let fixture: ComponentFixture<InfogeneraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfogeneraleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfogeneraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
