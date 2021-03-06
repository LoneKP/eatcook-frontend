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
      {
        path: "meals/:id",
        loadChildren: "../meals/meal/meal.module#MealPageModule"
      },
      { path: "cook", loadChildren: "../cook/cook.module#CookPageModule" },
      {
        path: "profile",
        loadChildren: "../profile/profile.module#ProfilePageModule"
      },
      {
        path: "profile/handouts/:id",
        loadChildren: "../profile/handouts/handouts.module#HandoutsPageModule"
      },
      {
        path: "profile/pickups/:id",
        loadChildren: "../profile/pickups/pickups.module#PickupsPageModule"
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
