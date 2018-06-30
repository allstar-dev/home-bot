import { PowerSupply } from "./power-supply";

export class Device {
  id: number;
  name: string;
  powerSupplies: PowerSupply[];
  height: number;
  position: number;

  constructor(name: string) {
    this.id = Math.round(100 * Math.random());
    this.name = name;
    this.powerSupplies = [];
    this.height = Math.round(4 * Math.random());
  }

  addPowerSupply(powerSupply: PowerSupply) {
    this.powerSupplies.push(powerSupply);
  }
}
