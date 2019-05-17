import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPostDemoComponent } from './http-post-demo.component';

describe('HttpPostDemoComponent', () => {
  let component: HttpPostDemoComponent;
  let fixture: ComponentFixture<HttpPostDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpPostDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpPostDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
