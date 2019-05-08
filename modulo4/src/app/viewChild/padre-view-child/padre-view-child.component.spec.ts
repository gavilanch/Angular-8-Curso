import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreViewChildComponent } from './padre-view-child.component';

describe('PadreViewChildComponent', () => {
  let component: PadreViewChildComponent;
  let fixture: ComponentFixture<PadreViewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreViewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
