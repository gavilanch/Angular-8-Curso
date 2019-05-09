import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreProyeccionComponent } from './padre-proyeccion.component';

describe('PadreProyeccionComponent', () => {
  let component: PadreProyeccionComponent;
  let fixture: ComponentFixture<PadreProyeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreProyeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreProyeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
