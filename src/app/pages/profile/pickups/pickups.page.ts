import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-pickups",
  templateUrl: "./pickups.page.html",
  styleUrls: ["./pickups.page.scss"]
})
export class PickupsPage implements OnInit {
  url = environment.url;
  order = null;
  cook = null;
  meal = null;
  id = null;

  constructor(private activatedRoute: ActivatedRoute, public http: HttpClient) {
    this.order = [];
    this.cook = [];
    this.meal = [];
  }

  ngOnInit() {}

  ionViewWillEnter() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getOrder(id);
  }

  getOrder(id) {
    this.http.get(`${this.url}/user/orders/pickups/` + id).subscribe(result => {
      this.order = result;
      this.meal = result["meal"];
      this.cook = result["meal"]["user"];
    });
  }

  buttonClick() {
    console.log(this.order);
  }
}
