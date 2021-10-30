import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApEditorComponent } from './ap-editor.component';

describe('ApEditorComponent', () => {
  let component: ApEditorComponent;
  let fixture: ComponentFixture<ApEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
