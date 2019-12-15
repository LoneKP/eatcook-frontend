import { AuthGuardService } from "./services/auth-guard.service";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", loadChildren: "./pages/login/login.module#LoginPageModule" },
  { path: "app", loadChildren: "./pages/tabs/tabs.module#TabsPageModule" },
  {
    path: "app/profile/info",
    loadChildren: "./pages/profile/info/info.module#InfoPageModule"
  },
  {
    path: "app/profile/edit/name",
    loadChildren: "./pages/profile/edit/name/name.module#NamePageModule"
  },
  {
    path: "email",
    loadChildren: "./pages/profile/edit/email/email.module#EmailPageModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
