import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoViewChildComponent } from './hijo-view-child.component';

describe('HijoViewChildComponent', () => {
  let component: HijoViewChildComponent;
  let fixture: ComponentFixture<HijoViewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijoViewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
