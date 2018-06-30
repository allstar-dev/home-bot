export class Port {
  id: number;
  name: string;

  constructor(name: string) {
    this.id = 100 * Math.random();
    this.name = name;
  }
}
