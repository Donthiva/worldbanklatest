import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleTrainingComponent } from './multiple-training.component';

describe('MultipleTrainingComponent', () => {
  let component: MultipleTrainingComponent;
  let fixture: ComponentFixture<MultipleTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
