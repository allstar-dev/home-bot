import { Component, OnInit, Input } from "@angular/core";
import { Rack } from "../../models/rack";

@Component({
  selector: "app-rack-svg",
  templateUrl: "./rack-svg.component.html",
  styleUrls: ["./rack-svg.component.css"]
})
export class RackSvgComponent implements OnInit {
  @Input() rack: Rack;

  constructor() {}

  ngOnInit() {}
}
