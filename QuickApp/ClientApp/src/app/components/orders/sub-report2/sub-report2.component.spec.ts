import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubReport2Component } from './sub-report2.component';

describe('SubReport2Component', () => {
  let component: SubReport2Component;
  let fixture: ComponentFixture<SubReport2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubReport2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubReport2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
