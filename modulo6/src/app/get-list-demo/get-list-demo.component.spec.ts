import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetListDemoComponent } from './get-list-demo.component';

describe('GetListDemoComponent', () => {
  let component: GetListDemoComponent;
  let fixture: ComponentFixture<GetListDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetListDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetListDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
