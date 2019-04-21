import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NietoBSComponent } from './nieto-b-s.component';

describe('NietoBSComponent', () => {
  let component: NietoBSComponent;
  let fixture: ComponentFixture<NietoBSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NietoBSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NietoBSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
