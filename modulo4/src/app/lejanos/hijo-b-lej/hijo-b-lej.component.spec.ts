import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoBLejComponent } from './hijo-b-lej.component';

describe('HijoBLejComponent', () => {
  let component: HijoBLejComponent;
  let fixture: ComponentFixture<HijoBLejComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijoBLejComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoBLejComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
