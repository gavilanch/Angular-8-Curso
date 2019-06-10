import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreLejComponent } from './padre-lej.component';

describe('PadreLejComponent', () => {
  let component: PadreLejComponent;
  let fixture: ComponentFixture<PadreLejComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreLejComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreLejComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
