import { Server } from './server';

export class Cluster {
    id: number;
    name: string;
    servers: Server[];

    addServer(server: Server) {
        this.servers.push(server);
    }

    constructor(name: string) {
        this.id = 100 * Math.random();
        this.name = name;
        this.servers = [];
    }
}
