import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarartiontvaComponent } from './declarartiontva.component';

describe('DeclarartiontvaComponent', () => {
  let component: DeclarartiontvaComponent;
  let fixture: ComponentFixture<DeclarartiontvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclarartiontvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarartiontvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
