import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPersonInfoComponent } from './business-person-info.component';

describe('BusinessPersonInfoComponent', () => {
  let component: BusinessPersonInfoComponent;
  let fixture: ComponentFixture<BusinessPersonInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessPersonInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPersonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
