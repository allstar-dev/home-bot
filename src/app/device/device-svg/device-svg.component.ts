import { Component, OnInit, Input } from "@angular/core";
import { Device } from "../../models/device";

@Component({
  selector: "app-device-svg",
  templateUrl: "./device-svg.component.html",
  styleUrls: ["./device-svg.component.css"]
})
export class DeviceSvgComponent implements OnInit {
  @Input() device: Device;

  constructor() {}

  ngOnInit() {}
}
