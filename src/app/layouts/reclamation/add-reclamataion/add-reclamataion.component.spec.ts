import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReclamataionComponent } from './add-reclamataion.component';

describe('AddReclamataionComponent', () => {
  let component: AddReclamataionComponent;
  let fixture: ComponentFixture<AddReclamataionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReclamataionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReclamataionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
