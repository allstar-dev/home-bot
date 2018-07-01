import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Rack } from "../../models/rack";
import { RackService } from "../../rack/rack.service";
import { Observable } from "rxjs";
import { FormControl } from "@angular/forms";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "app-rack-search",
  templateUrl: "./rack-search.component.html",
  styleUrls: ["./rack-search.component.css"]
})
export class RackSearchComponent implements OnInit {
  racks: Rack[];
  rackCtrl = new FormControl();
  filteredRacks: Observable<Rack[]>;

  @Output() rack = new EventEmitter<Rack>();
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

  ngOnInit() {
    this.rackService.getRacks().subscribe(racks => (this.racks = racks));
  }
  addRack(rack: Rack) {
    this.rack.emit(rack);
    this.rackCtrl.setValue("");
  }
}
