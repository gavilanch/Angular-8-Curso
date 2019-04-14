import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchDemoComponent } from './ng-switch-demo.component';

describe('NgSwitchDemoComponent', () => {
  let component: NgSwitchDemoComponent;
  let fixture: ComponentFixture<NgSwitchDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwitchDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
