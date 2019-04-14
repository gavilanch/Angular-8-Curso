import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForDemoComponent } from './ng-for-demo.component';

describe('NgForDemoComponent', () => {
  let component: NgForDemoComponent;
  let fixture: ComponentFixture<NgForDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
