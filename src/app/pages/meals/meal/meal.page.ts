import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../../services/auth.service";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-meal",
  templateUrl: "./meal.page.html",
  styleUrls: ["./meal.page.scss"]
})
export class MealPage implements OnInit {
  tags: any;
  meal = null;
  id = null;
  url = environment.url;

  constructor(
    private activatedRoute: ActivatedRoute,
    public http: HttpClient,
    authService: AuthService
  ) {
    this.meal = [];
  }

  ngOnInit() {
    //get the id from the url
    let id = this.activatedRoute.snapshot.paramMap.get("id");

    //query the meal from the api
    this.getMeal(id);
  }

  getMeal(id) {
    this.http.get(`${this.url}/meals/` + id).subscribe(result => {
      this.meal = result;
      this.tags = this.meal["tags"];
    });
  }

  // openBookPage(id) {
  //   this.router.navigateByUrl("/app/meals/" + id);
  // }
}
