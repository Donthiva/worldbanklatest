import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubReport4Component } from './sub-report4.component';

describe('SubReport4Component', () => {
  let component: SubReport4Component;
  let fixture: ComponentFixture<SubReport4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubReport4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubReport4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
