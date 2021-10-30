import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdatapageComponent } from './masterdatapage.component';

describe('MasterdatapageComponent', () => {
  let component: MasterdatapageComponent;
  let fixture: ComponentFixture<MasterdatapageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterdatapageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterdatapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
