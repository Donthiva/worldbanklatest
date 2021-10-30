import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainigTypeComponent } from './trainig-type.component';

describe('TrainigTypeComponent', () => {
  let component: TrainigTypeComponent;
  let fixture: ComponentFixture<TrainigTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainigTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainigTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
