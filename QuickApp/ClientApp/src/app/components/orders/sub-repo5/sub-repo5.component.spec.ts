import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRepo5Component } from './sub-repo5.component';

describe('SubRepo5Component', () => {
  let component: SubRepo5Component;
  let fixture: ComponentFixture<SubRepo5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubRepo5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRepo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
