import { AuthGuardService } from "./services/auth-guard.service";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", loadChildren: "./pages/login/login.module#LoginPageModule" },
  { path: "app", loadChildren: "./pages/tabs/tabs.module#TabsPageModule" },
  { path: 'meal', loadChildren: './pages/meals/meal/meal.module#MealPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
