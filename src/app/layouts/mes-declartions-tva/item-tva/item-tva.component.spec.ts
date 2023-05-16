import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTvaComponent } from './item-tva.component';

describe('ItemTvaComponent', () => {
  let component: ItemTvaComponent;
  let fixture: ComponentFixture<ItemTvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
