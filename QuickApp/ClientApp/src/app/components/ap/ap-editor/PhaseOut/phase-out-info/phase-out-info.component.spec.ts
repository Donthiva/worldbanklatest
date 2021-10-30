import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseOutInfoComponent } from './phase-out-info.component';

describe('PhaseOutInfoComponent', () => {
  let component: PhaseOutInfoComponent;
  let fixture: ComponentFixture<PhaseOutInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhaseOutInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseOutInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
