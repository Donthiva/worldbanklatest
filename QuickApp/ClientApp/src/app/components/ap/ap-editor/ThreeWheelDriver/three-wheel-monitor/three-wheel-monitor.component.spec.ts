import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeWheelMonitorComponent } from './three-wheel-monitor.component';

describe('ThreeWheelMonitorComponent', () => {
  let component: ThreeWheelMonitorComponent;
  let fixture: ComponentFixture<ThreeWheelMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeWheelMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeWheelMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
