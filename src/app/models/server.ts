import { Device } from "./device";
import { ServerBlade } from "./server-blade";

export class Server extends Device {
  manufacturer: string;
  serverBlades?: ServerBlade[];
  bladeSlots?: number;

  constructor(manufacturer: string) {
    super("new device");
    this.manufacturer = manufacturer;
  }
}
