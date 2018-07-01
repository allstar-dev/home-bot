import { Device } from "./device";
import { AvailableSpace } from "./interfaces/available-space";

export class Rack {
  id: number;
  name: string;
  power: number;
  devices: Device[];
  height: number;

  constructor(name: string, height: number) {
    this.id = Math.round(100 * Math.random());
    this.name = name;
    this.power = Math.round(4 * Math.random());
    this.height = height;
    this.devices = [];
  }
  getName() {
    return this.name;
  }

  public addDevice(device: Device) {
    device.position = null;
    this.setDevicePosition(device);
    if (device.position) {
      console.log(device.position);
      this.devices.push(device);
    }
  }

  setDevicePosition(device: Device) {
    if (this.devices.length === 0 && device.height <= this.height) {
      device.position = 1;
    } else {
      const maxInstalledPosition: number = Math.max.apply(
        Math,
        this.devices.map(function(o) {
          return o.position + o.height;
        })
      );
      if (maxInstalledPosition + device.height <= this.height) {
        device.position = maxInstalledPosition + 1;
      } else {
        console.log("Rack full");
      }
    }
  }

  removeDevice(device: Device) {
    this.devices.splice(this.devices.indexOf(device), 1);
  }
}
