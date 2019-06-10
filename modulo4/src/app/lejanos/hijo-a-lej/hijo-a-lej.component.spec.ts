import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoALejComponent } from './hijo-a-lej.component';

describe('HijoALejComponent', () => {
  let component: HijoALejComponent;
  let fixture: ComponentFixture<HijoALejComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijoALejComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoALejComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
