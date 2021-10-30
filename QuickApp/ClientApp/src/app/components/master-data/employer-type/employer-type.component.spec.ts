import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerTypeComponent } from './employer-type.component';

describe('EmployerTypeComponent', () => {
  let component: EmployerTypeComponent;
  let fixture: ComponentFixture<EmployerTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
