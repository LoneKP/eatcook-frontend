import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "",
    redirectTo: "meals",
    pathMatch: "full"
  },
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "meals",
        loadChildren: "../meals/meals.module#MealsPageModule"
      },
      { path: "cook", loadChildren: "../cook/cook.module#CookPageModule" },
      {
        path: "profile",
        loadChildren: "../profile/profile.module#ProfilePageModule"
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
