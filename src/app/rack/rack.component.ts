import { Component, OnInit } from "@angular/core";
import { Rack } from "../models/rack";
import { Device } from "../models/device";
import { PowerSupply } from "../models/power-supply";

@Component({
  selector: "app-rack",
  templateUrl: "./rack.component.html",
  styleUrls: ["./rack.component.css"]
})
export class RackComponent implements OnInit {
  newRack = new Rack("New Rack", 2);

  addDevice() {
    console.log("hi");
    this.newRack.addDevice(new Device("device1"));
  }

  constructor() {}

  ngOnInit() {}
}
