import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckModalPage } from './deck-modal.page';

describe('DeckModalPage', () => {
  let component: DeckModalPage;
  let fixture: ComponentFixture<DeckModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
