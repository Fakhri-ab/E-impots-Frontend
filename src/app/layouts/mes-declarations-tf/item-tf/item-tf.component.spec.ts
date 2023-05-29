import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTFComponent } from './item-tf.component';

describe('ItemTFComponent', () => {
  let component: ItemTFComponent;
  let fixture: ComponentFixture<ItemTFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
