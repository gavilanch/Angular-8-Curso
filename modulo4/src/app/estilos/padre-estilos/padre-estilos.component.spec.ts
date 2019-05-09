import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreEstilosComponent } from './padre-estilos.component';

describe('PadreEstilosComponent', () => {
  let component: PadreEstilosComponent;
  let fixture: ComponentFixture<PadreEstilosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreEstilosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreEstilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
