import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosListadoComponent } from './usuarios-listado.component';

describe('UsuariosListadoComponent', () => {
  let component: UsuariosListadoComponent;
  let fixture: ComponentFixture<UsuariosListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
