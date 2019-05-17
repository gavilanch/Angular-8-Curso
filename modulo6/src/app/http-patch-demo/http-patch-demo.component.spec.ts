import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPatchDemoComponent } from './http-patch-demo.component';

describe('HttpPatchDemoComponent', () => {
  let component: HttpPatchDemoComponent;
  let fixture: ComponentFixture<HttpPatchDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpPatchDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpPatchDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
