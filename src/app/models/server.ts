import { Device } from "./device";
import { ServerBlade } from "./server-blade";

export class Server extends Device {
  manufacturer: string;
  serverBlades?: ServerBlade[];
  bladeSlots?: number;
  extra: string;

  constructor(name: string, height: number, bladeSlots?: number) {
    super("new device");
    this.name = name;
    this.bladeSlots = bladeSlots;
    this.height = height;
    this.extra = "hello";
  }
}
