import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonPanicoComponent } from './boton-panico.component';

describe('BotonPanicoComponent', () => {
  let component: BotonPanicoComponent;
  let fixture: ComponentFixture<BotonPanicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonPanicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonPanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
