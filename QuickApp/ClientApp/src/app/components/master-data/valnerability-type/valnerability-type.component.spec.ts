import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValnerabilityTypeComponent } from './valnerability-type.component';

describe('ValnerabilityTypeComponent', () => {
  let component: ValnerabilityTypeComponent;
  let fixture: ComponentFixture<ValnerabilityTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValnerabilityTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValnerabilityTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
