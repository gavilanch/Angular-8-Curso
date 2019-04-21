import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoBSComponent } from './hijo-b-s.component';

describe('HijoBSComponent', () => {
  let component: HijoBSComponent;
  let fixture: ComponentFixture<HijoBSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijoBSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoBSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
