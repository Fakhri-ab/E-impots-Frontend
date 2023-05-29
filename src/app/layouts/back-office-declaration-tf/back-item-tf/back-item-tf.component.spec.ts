import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackItemTfComponent } from './back-item-tf.component';

describe('BackItemTfComponent', () => {
  let component: BackItemTfComponent;
  let fixture: ComponentFixture<BackItemTfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackItemTfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackItemTfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
