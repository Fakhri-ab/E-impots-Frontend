import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaclarationtfComponent } from './daclarationtf.component';

describe('DaclarationtfComponent', () => {
  let component: DaclarationtfComponent;
  let fixture: ComponentFixture<DaclarationtfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaclarationtfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaclarationtfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
