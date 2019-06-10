import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NietoBLejComponent } from './nieto-b-lej.component';

describe('NietoBLejComponent', () => {
  let component: NietoBLejComponent;
  let fixture: ComponentFixture<NietoBLejComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NietoBLejComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NietoBLejComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
