import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreHerComponent } from './padre-her.component';

describe('PadreHerComponent', () => {
  let component: PadreHerComponent;
  let fixture: ComponentFixture<PadreHerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreHerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreHerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
