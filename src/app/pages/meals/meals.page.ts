import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../services/auth.service";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-meals",
  templateUrl: "./meals.page.html",
  styleUrls: ["./meals.page.scss"]
})
export class MealsPage {
  meals: any;
  url = environment.url;
  constructor(private authService: AuthService, public http: HttpClient) {
    this.meals = [];
  }

  ngOnInit() {
    this.getMeals();
  }

  getMeals() {
    this.http.get(`${this.url}/meals`).subscribe((meals: any) => {
      this.meals = meals;
    });
  }
}
