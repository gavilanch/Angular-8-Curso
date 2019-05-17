import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroToServicesComponent } from './intro-to-services.component';

describe('IntroToServicesComponent', () => {
  let component: IntroToServicesComponent;
  let fixture: ComponentFixture<IntroToServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroToServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroToServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
