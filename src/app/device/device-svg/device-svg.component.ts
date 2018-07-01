import { Component, OnInit, Input } from "@angular/core";
import { Device } from "../../models/device";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "g[app-device-svg]",
  templateUrl: "./device-svg.component.html",
  styleUrls: ["./device-svg.component.css"]
})
export class DeviceSvgComponent implements OnInit {
  @Input() device: Device;
  @Input() rackHeight: number;
  yPosition: number;
  deviceHeight: number;

  constructor() {}

  ngOnInit() {
    // this.yPosition = (1 + this.rackHeight - this.device.position) * 13;
    this.yPosition =
      (1 + this.rackHeight - this.device.position - this.device.height) * 13;
    this.deviceHeight = this.device.height * 13;
  }
}
