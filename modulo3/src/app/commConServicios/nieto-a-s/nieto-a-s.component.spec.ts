import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NietoASComponent } from './nieto-a-s.component';

describe('NietoASComponent', () => {
  let component: NietoASComponent;
  let fixture: ComponentFixture<NietoASComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NietoASComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NietoASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
