import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandoutsPage } from './handouts.page';

describe('HandoutsPage', () => {
  let component: HandoutsPage;
  let fixture: ComponentFixture<HandoutsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandoutsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandoutsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
