import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Switch } from "../models/switch";

@Injectable()
export class SwitchService {
  constructor(private httpClient: HttpClient) {}
  getSwitches() {
    return this.httpClient.get<Switch[]>("./assets/switches.json");
  }
}
