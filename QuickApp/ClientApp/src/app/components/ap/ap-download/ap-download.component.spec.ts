import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApDownloadComponent } from './ap-download.component';

describe('ApDownloadComponent', () => {
  let component: ApDownloadComponent;
  let fixture: ComponentFixture<ApDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
