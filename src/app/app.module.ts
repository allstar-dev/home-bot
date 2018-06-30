import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { MatMenuModule } from "@angular/material/menu";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSidenavModule } from "@angular/material/sidenav";
import { HttpClientModule } from "@angular/common/http";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material";
import "hammerjs";

import { AppComponent } from "./app.component";
import { RackComponent } from "./rack/rack.component";
import { DeviceComponent } from "./device/device.component";
import { ServerComponent } from "./server/server.component";
import { RackSvgComponent } from "./rack/rack-svg/rack-svg.component";
import { DeviceSvgComponent } from "./device/device-svg/device-svg.component";
import { HomeComponent } from "./home/home.component";
import { ViewDesignsComponent } from "./view-designs/view-designs.component";
import { CreateDesignsComponent } from "./create-designs/create-designs.component";
import { AppRoutingModule } from ".//app-routing.module";
import { RackService } from "./rack/rack.service";
import { ServerSearchComponent } from "./create-designs/server-search/server-search.component";
import { ServerService } from "./server/server.service";
import { SwitchSearchComponent } from "./create-designs/switch-search/switch-search.component";
import { SwitchService } from "./switch/switch.service";

@NgModule({
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    AppRoutingModule,
    MatTabsModule,
    MatSidenavModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    RackComponent,
    DeviceComponent,
    ServerComponent,
    RackSvgComponent,
    DeviceSvgComponent,
    HomeComponent,
    ViewDesignsComponent,
    CreateDesignsComponent,
    ServerSearchComponent,
    SwitchSearchComponent
  ],
  providers: [RackService, ServerService, SwitchService],
  bootstrap: [AppComponent]
})
export class AppModule {}
