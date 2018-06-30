import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDesignsComponent } from './create-designs.component';

describe('CreateDesignsComponent', () => {
  let component: CreateDesignsComponent;
  let fixture: ComponentFixture<CreateDesignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDesignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
