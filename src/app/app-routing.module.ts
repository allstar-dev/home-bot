import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewDesignsComponent } from "./view-designs/view-designs.component";
import { CreateDesignsComponent } from "./create-designs/create-designs.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "view", component: ViewDesignsComponent },
  { path: "create", component: CreateDesignsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
