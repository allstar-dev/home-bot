import { Device } from "./device";
import { AvailableSpace } from "./interfaces/available-space";

export class Rack {
  id: number;
  name: string;
  power: number;
  devices: Device[];
  height: number;

  constructor(name: string) {
    this.id = Math.round(100 * Math.random());
    this.name = name;
    this.power = Math.round(4 * Math.random());
    this.height = Math.round(20 * Math.random());
    this.devices = [];
  }
  getName() {
    return this.name;
  }

  addDevice(device: Device) {
    // this.getAvailableSpace(device.height);
    this.devices.push(device);
  }

  removeDevice(device: Device) {
    this.devices.splice(this.devices.indexOf(device), 1);
  }

  // getAvailableSpace(height: number): AvailableSpace[] {
  // if (this.devices.length === 0) {
  //   return [{ startPosition: 0, endPosition: this.height }];
  // } else {
  //   this.devices.sort(
  //     (a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
  //   );
  //   let initialPosition: number = 1;
  //   let availableSpaces: AvailableSpace[] = [];
  //   this.devices.forEach((device, index) => {
  //     // check first slot
  //     if (
  //       index === 0 &&
  //       initialPosition < device.position &&
  //       device.position >= height
  //     ) {
  //       availableSpaces.push({
  //         startPosition: 0,
  //         endPosition: device.position
  //       });
  //       // last slot
  //     } else if (
  //       index === this.devices.length &&
  //       device.position + device.height + height < this.height
  //     ) {
  //       availableSpaces[index] = {
  //         startPosition: 0,
  //         endPosition: device.position
  //       };
  //       // window after
  //     } else {
  //     }
  //   });
  // }
  // }
}
