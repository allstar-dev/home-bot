import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RackSearchComponent } from './rack-search.component';

describe('RackSearchComponent', () => {
  let component: RackSearchComponent;
  let fixture: ComponentFixture<RackSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RackSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RackSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
