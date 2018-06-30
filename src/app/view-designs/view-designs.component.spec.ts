import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDesignsComponent } from './view-designs.component';

describe('ViewDesignsComponent', () => {
  let component: ViewDesignsComponent;
  let fixture: ComponentFixture<ViewDesignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDesignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
