import { Component, OnInit } from "@angular/core";
import { Rack } from "../models/rack";
import { RackService } from "../rack/rack.service";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { Server } from "../models/server";
import { Switch } from "../models/switch";

@Component({
  selector: "app-create-designs",
  templateUrl: "./create-designs.component.html",
  styleUrls: ["./create-designs.component.css"]
})
export class CreateDesignsComponent implements OnInit {
  rackSearch: Boolean = false;
  serverSearch: Boolean = false;
  switchSearch: Boolean = false;

  rackInventory: Rack[] = [];
  serverInventory: Server[] = [];
  switchInventory: Switch[] = [];

  selectedRack: Rack;
  selectedServer: Server;
  selectedSwitch: Switch;

  constructor(private rackService: RackService) {}

  addRack(rack: Rack) {
    rack = new Rack(rack.name, rack.height);
    this.rackInventory.push(rack);
  }

  addServer(server: Server) {
    server = new Server(server.name, server.height, server.bladeSlots);
    this.serverInventory.push(server);
  }

  addSwitch(switchDevice: Switch) {
    this.switchInventory.push(switchDevice);
  }

  selectRack(rack) {
    this.selectedRack = rack;
  }

  addServerToRack(rack: Rack, server: Server) {
    this.selectedServer = server;
    rack.addDevice(server);
  }

  ngOnInit() {}
}
