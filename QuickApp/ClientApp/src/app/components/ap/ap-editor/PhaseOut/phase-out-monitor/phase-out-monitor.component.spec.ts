import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseOutMonitorComponent } from './phase-out-monitor.component';

describe('PhaseOutMonitorComponent', () => {
  let component: PhaseOutMonitorComponent;
  let fixture: ComponentFixture<PhaseOutMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhaseOutMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseOutMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
