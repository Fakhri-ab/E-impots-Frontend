import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailinfoComponent } from './detailinfo.component';

describe('DetailinfoComponent', () => {
  let component: DetailinfoComponent;
  let fixture: ComponentFixture<DetailinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
