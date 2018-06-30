import { Device } from "./device";
import { Port } from "./port";

export class ServerBlade extends Device {
  manufacturer: string;
  ports: Port[];

  constructor(manufacturer: string) {
    super("new device");
    this.manufacturer = manufacturer;
  }
}
