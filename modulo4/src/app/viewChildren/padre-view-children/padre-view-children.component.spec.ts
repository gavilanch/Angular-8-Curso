import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreViewChildrenComponent } from './padre-view-children.component';

describe('PadreViewChildrenComponent', () => {
  let component: PadreViewChildrenComponent;
  let fixture: ComponentFixture<PadreViewChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreViewChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreViewChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
