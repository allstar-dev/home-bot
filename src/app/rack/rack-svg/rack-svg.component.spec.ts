import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RackSvgComponent } from "./rack-svg.component";

describe("RackSvgComponent", () => {
  let component: RackSvgComponent;
  let fixture: ComponentFixture<RackSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RackSvgComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RackSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
