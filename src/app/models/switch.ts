import { Device } from "./device";
import { Port } from "./port";

export class Switch extends Device {
  manufacturer: string;
  upstreamPorts: Port[];

  constructor(manufacturer: string) {
    super("new device");
    this.manufacturer = manufacturer;
  }
}
