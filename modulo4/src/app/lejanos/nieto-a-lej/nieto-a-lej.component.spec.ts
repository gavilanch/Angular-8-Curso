import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NietoALejComponent } from './nieto-a-lej.component';

describe('NietoALejComponent', () => {
  let component: NietoALejComponent;
  let fixture: ComponentFixture<NietoALejComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NietoALejComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NietoALejComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
