import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoPahComponent } from './hijo-pah.component';

describe('HijoPahComponent', () => {
  let component: HijoPahComponent;
  let fixture: ComponentFixture<HijoPahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijoPahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoPahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
