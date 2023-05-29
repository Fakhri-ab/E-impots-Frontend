import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackTfListeComponent } from './back-tf-liste.component';

describe('BackTfListeComponent', () => {
  let component: BackTfListeComponent;
  let fixture: ComponentFixture<BackTfListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackTfListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackTfListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
