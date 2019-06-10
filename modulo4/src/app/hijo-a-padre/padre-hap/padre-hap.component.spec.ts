import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreHapComponent } from './padre-hap.component';

describe('PadreHapComponent', () => {
  let component: PadreHapComponent;
  let fixture: ComponentFixture<PadreHapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreHapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreHapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
