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
  racks: Rack[];
  rackInventory: Rack[] = [];
  serverInventory: Server[] = [];
  switchInventory: Switch[] = [];
  rackCtrl = new FormControl();
  filteredRacks: Observable<Rack[]>;

  constructor(private rackService: RackService) {
    this.filteredRacks = this.rackCtrl.valueChanges.pipe(
      startWith(""),
      map(rack => (rack ? this._filteredRacks(rack) : this.racks))
    );
  }

  private _filteredRacks(value: string): Rack[] {
    const filterValue = value.toLowerCase();

    return this.racks.filter(
      rack => rack.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  addRack(rack: Rack) {
    this.rackInventory.push(rack);
  }

  addServer(server: Server) {
    this.serverInventory.push(server);
  }

  addSwitch(switchDevice: Switch) {
    this.switchInventory.push(switchDevice);
  }

  ngOnInit() {
    this.rackService.getRacks().subscribe(racks => (this.racks = racks));
  }
}
