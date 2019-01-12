import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploComponent } from './ejemplo.component';

describe('EjemploComponent', () => {
  let component: EjemploComponent;
  let fixture: ComponentFixture<EjemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
