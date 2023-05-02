import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarartionirppComponent } from './declarartionirpp.component';

describe('DeclarartionirppComponent', () => {
  let component: DeclarartionirppComponent;
  let fixture: ComponentFixture<DeclarartionirppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclarartionirppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarartionirppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
