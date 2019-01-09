import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolacionDemoComponent } from './interpolacion-demo.component';

describe('InterpolacionDemoComponent', () => {
  let component: InterpolacionDemoComponent;
  let fixture: ComponentFixture<InterpolacionDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpolacionDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolacionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
