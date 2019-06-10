import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadrePahComponent } from './padre-pah.component';

describe('PadrePahComponent', () => {
  let component: PadrePahComponent;
  let fixture: ComponentFixture<PadrePahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadrePahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadrePahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
