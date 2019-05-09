import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoProyeccionComponent } from './hijo-proyeccion.component';

describe('HijoProyeccionComponent', () => {
  let component: HijoProyeccionComponent;
  let fixture: ComponentFixture<HijoProyeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijoProyeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoProyeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
