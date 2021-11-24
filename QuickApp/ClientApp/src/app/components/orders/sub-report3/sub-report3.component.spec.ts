import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubReport3Component } from './sub-report3.component';

describe('SubReport3Component', () => {
  let component: SubReport3Component;
  let fixture: ComponentFixture<SubReport3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubReport3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubReport3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
