import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApInterventionComponent } from './ap-intervention.component';

describe('ApInterventionComponent', () => {
  let component: ApInterventionComponent;
  let fixture: ComponentFixture<ApInterventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApInterventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
