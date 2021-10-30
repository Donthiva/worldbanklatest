import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMonitorComponent } from './employee-monitor.component';

describe('EmployeeMonitorComponent', () => {
  let component: EmployeeMonitorComponent;
  let fixture: ComponentFixture<EmployeeMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
