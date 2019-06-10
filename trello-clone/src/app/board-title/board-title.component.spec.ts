import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardTitleComponent } from './board-title.component';

describe('BoardTitleComponent', () => {
  let component: BoardTitleComponent;
  let fixture: ComponentFixture<BoardTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
