import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoASComponent } from './hijo-a-s.component';

describe('HijoASComponent', () => {
  let component: HijoASComponent;
  let fixture: ComponentFixture<HijoASComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijoASComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
