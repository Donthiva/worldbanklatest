import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeWheelInfoComponent } from './three-wheel-info.component';

describe('ThreeWheelInfoComponent', () => {
  let component: ThreeWheelInfoComponent;
  let fixture: ComponentFixture<ThreeWheelInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeWheelInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeWheelInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
