import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoHapComponent } from './hijo-hap.component';

describe('HijoHapComponent', () => {
  let component: HijoHapComponent;
  let fixture: ComponentFixture<HijoHapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijoHapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoHapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
