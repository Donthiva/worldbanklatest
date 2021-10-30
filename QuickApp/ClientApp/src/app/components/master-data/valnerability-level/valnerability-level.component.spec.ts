import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValnerabilityLevelComponent } from './valnerability-level.component';

describe('ValnerabilityLevelComponent', () => {
  let component: ValnerabilityLevelComponent;
  let fixture: ComponentFixture<ValnerabilityLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValnerabilityLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValnerabilityLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
