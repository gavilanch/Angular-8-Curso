import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreHComponent } from './padre-h.component';

describe('PadreHComponent', () => {
  let component: PadreHComponent;
  let fixture: ComponentFixture<PadreHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
