import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijo1HerComponent } from './hijo1-her.component';

describe('Hijo1HerComponent', () => {
  let component: Hijo1HerComponent;
  let fixture: ComponentFixture<Hijo1HerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hijo1HerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hijo1HerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
