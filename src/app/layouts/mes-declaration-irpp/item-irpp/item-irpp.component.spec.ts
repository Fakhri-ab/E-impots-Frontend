import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemIRPPComponent } from './item-irpp.component';

describe('ItemIRPPComponent', () => {
  let component: ItemIRPPComponent;
  let fixture: ComponentFixture<ItemIRPPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemIRPPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemIRPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
