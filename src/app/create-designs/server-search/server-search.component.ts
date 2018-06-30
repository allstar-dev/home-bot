import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Server } from "../../models/server";
import { ServerService } from "../../server/server.service";
import { Observable } from "rxjs";
import { FormControl } from "@angular/forms";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "app-server-search",
  templateUrl: "./server-search.component.html",
  styleUrls: ["./server-search.component.css"]
})
export class ServerSearchComponent implements OnInit {
  servers: Server[];
  serverCtrl = new FormControl();
  filteredServers: Observable<Server[]>;

  @Output() server = new EventEmitter<Server>();
  constructor(private serverService: ServerService) {
    this.filteredServers = this.serverCtrl.valueChanges.pipe(
      startWith(""),
      map(server => (server ? this._filteredServers(server) : this.servers))
    );
  }

  private _filteredServers(value: string): Server[] {
    const filterValue = value.toLowerCase();

    return this.servers.filter(
      server => server.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  ngOnInit() {
    this.serverService
      .getServers()
      .subscribe(servers => (this.servers = servers));
  }
  addServer(server: Server) {
    this.server.emit(server);
  }
}
