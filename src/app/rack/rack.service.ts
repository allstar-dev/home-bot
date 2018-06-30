import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Rack } from "../models/rack";

@Injectable()
export class RackService {
  constructor(private httpClient: HttpClient) {}
  getRacks() {
    return this.httpClient.get<Rack[]>("./assets/racks.json");
  }
}
