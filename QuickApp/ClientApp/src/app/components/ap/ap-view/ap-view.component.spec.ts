import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApViewComponent } from './ap-view.component';

describe('ApViewComponent', () => {
  let component: ApViewComponent;
  let fixture: ComponentFixture<ApViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
