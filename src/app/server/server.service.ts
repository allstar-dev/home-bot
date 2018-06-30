import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Server } from "../models/server";

@Injectable()
export class ServerService {
  constructor(private httpClient: HttpClient) {}
  getServers() {
    return this.httpClient.get<Server[]>("./assets/servers.json");
  }
}
