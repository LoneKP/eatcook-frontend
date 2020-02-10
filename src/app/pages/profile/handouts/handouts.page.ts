import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-handouts",
  templateUrl: "./handouts.page.html",
  styleUrls: ["./handouts.page.scss"]
})
export class HandoutsPage implements OnInit {
  url = environment.url;
  id = null;
  meal = null;
  handouts: any;
  constructor(private activatedRoute: ActivatedRoute, public http: HttpClient) {
    this.handouts = [];
    this.meal = [];
  }

  ngOnInit() {}

  ionViewWillEnter() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getHandout(id);
    this.getMeal(id);
  }

  buttonClick() {
    console.log(this.handouts);
    console.log(this.meal);
  }

  getHandout(id) {
    this.http.get(`${this.url}/user/meals/pickups/` + id).subscribe(result => {
      this.handouts = result;
    });
  }

  getMeal(id) {
    this.http.get(`${this.url}/meals/` + id).subscribe(result => {
      this.meal = result;
    });
  }
}
