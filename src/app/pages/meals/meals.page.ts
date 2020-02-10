import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../services/auth.service";
import { environment } from "../../../environments/environment";
import { Router } from "@angular/router";

@Component({
  selector: "app-meals",
  templateUrl: "./meals.page.html",
  styleUrls: ["./meals.page.scss"]
})
export class MealsPage {
  meals: any;
  url = environment.url;
  constructor(
    private authService: AuthService,
    public http: HttpClient,
    private router: Router
  ) {
    this.meals = [];
  }

  ionViewWillEnter() {
    this.getMeals();
  }

  getMeals() {
    this.http.get(`${this.url}/meals`).subscribe((meals: any) => {
      this.meals = meals;
    });
  }

  openMealInTab(id) {
    this.router.navigateByUrl("/app/meals/" + id);
  }
}
