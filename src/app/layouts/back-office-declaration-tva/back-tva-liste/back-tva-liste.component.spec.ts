import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackTvaListeComponent } from './back-tva-liste.component';

describe('BackTvaListeComponent', () => {
  let component: BackTvaListeComponent;
  let fixture: ComponentFixture<BackTvaListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackTvaListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackTvaListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
