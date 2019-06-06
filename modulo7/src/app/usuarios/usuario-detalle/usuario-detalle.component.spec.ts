import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDetalleComponent } from './usuario-detalle.component';

describe('UsuarioDetalleComponent', () => {
  let component: UsuarioDetalleComponent;
  let fixture: ComponentFixture<UsuarioDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
