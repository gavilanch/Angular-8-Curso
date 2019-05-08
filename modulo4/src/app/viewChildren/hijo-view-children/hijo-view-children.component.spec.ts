import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoViewChildrenComponent } from './hijo-view-children.component';

describe('HijoViewChildrenComponent', () => {
  let component: HijoViewChildrenComponent;
  let fixture: ComponentFixture<HijoViewChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijoViewChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoViewChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
