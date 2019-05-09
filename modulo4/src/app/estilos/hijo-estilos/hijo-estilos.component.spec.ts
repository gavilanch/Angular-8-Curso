import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoEstilosComponent } from './hijo-estilos.component';

describe('HijoEstilosComponent', () => {
  let component: HijoEstilosComponent;
  let fixture: ComponentFixture<HijoEstilosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijoEstilosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoEstilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
