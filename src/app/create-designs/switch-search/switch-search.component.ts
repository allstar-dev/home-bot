import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Switch } from "../../models/switch";
import { SwitchService } from "../../switch/switch.service";
import { startWith, map } from "rxjs/operators";
import { Observable } from "rxjs";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-switch-search",
  templateUrl: "./switch-search.component.html",
  styleUrls: ["./switch-search.component.css"]
})
export class SwitchSearchComponent implements OnInit {
  switchDevicees: Switch[];
  switchDeviceCtrl = new FormControl();
  filteredSwitches: Observable<Switch[]>;

  @Output() switchDevice = new EventEmitter<Switch>();

  private _filteredSwitches(value: string): Switch[] {
    const filterValue = value.toLowerCase();

    return this.switchDevicees.filter(
      switchDevice => switchDevice.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  ngOnInit() {
    this.switchDeviceService
      .getSwitches()
      .subscribe(switchDevicees => (this.switchDevicees = switchDevicees));
  }

  constructor(private switchDeviceService: SwitchService) {
    this.filteredSwitches = this.switchDeviceCtrl.valueChanges.pipe(
      startWith(""),
      map(
        switchDevice =>
          switchDevice
            ? this._filteredSwitches(switchDevice)
            : this.switchDevicees
      )
    );
  }

  addSwitch(switchDevice: Switch) {
    this.switchDevice.emit(switchDevice);
  }
}
