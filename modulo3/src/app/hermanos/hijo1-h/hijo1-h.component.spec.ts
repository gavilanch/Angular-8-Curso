import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijo1HComponent } from './hijo1-h.component';

describe('Hijo1HComponent', () => {
  let component: Hijo1HComponent;
  let fixture: ComponentFixture<Hijo1HComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hijo1HComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hijo1HComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
