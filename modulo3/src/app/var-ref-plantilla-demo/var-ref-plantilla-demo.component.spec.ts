import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VarRefPlantillaDemoComponent } from './var-ref-plantilla-demo.component';

describe('VarRefPlantillaDemoComponent', () => {
  let component: VarRefPlantillaDemoComponent;
  let fixture: ComponentFixture<VarRefPlantillaDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarRefPlantillaDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VarRefPlantillaDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
