import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessMonitorComponent } from './business-monitor.component';

describe('BusinessMonitorComponent', () => {
  let component: BusinessMonitorComponent;
  let fixture: ComponentFixture<BusinessMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
