import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreSComponent } from './padre-s.component';

describe('PadreSComponent', () => {
  let component: PadreSComponent;
  let fixture: ComponentFixture<PadreSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
