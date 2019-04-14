import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassDemoComponent } from './ng-class-demo.component';

describe('NgClassDemoComponent', () => {
  let component: NgClassDemoComponent;
  let fixture: ComponentFixture<NgClassDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgClassDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
