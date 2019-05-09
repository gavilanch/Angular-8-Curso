import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectadoComponent } from './proyectado.component';

describe('ProyectadoComponent', () => {
  let component: ProyectadoComponent;
  let fixture: ComponentFixture<ProyectadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
