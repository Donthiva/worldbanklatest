import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployementStatusComponent } from './employement-status.component';

describe('EmployementStatusComponent', () => {
  let component: EmployementStatusComponent;
  let fixture: ComponentFixture<EmployementStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployementStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployementStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
