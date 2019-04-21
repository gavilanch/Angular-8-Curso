import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijo2HComponent } from './hijo2-h.component';

describe('Hijo2HComponent', () => {
  let component: Hijo2HComponent;
  let fixture: ComponentFixture<Hijo2HComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hijo2HComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hijo2HComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
