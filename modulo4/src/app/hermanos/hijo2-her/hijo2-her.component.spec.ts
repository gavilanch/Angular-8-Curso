import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijo2HerComponent } from './hijo2-her.component';

describe('Hijo2HerComponent', () => {
  let component: Hijo2HerComponent;
  let fixture: ComponentFixture<Hijo2HerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hijo2HerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hijo2HerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
