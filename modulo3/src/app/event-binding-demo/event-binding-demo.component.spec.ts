import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingDemoComponent } from './event-binding-demo.component';

describe('EventBindingDemoComponent', () => {
  let component: EventBindingDemoComponent;
  let fixture: ComponentFixture<EventBindingDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBindingDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBindingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
