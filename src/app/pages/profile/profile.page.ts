import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Storage } from "@ionic/storage";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"]
})
export class ProfilePage implements OnInit {
  user: any;
  userPastMeals: any;
  userFutureMeals: any;
  userPastOrders: any;
  userFutureOrders: any;
  url = environment.url;
  constructor(
    private authService: AuthService,
    private storage: Storage,
    public http: HttpClient,
    private router: Router
  ) {
    this.user = [];
    this.userPastMeals = [];
    this.userFutureMeals = [];
    this.userPastOrders = [];
    this.userFutureOrders = [];
  }

  buttonClick() {
    console.log(this.user);
    console.log(this.userPastMeals);
    console.log(this.userFutureMeals);
    console.log(this.userPastOrders);
    console.log(this.userFutureOrders);
  }

  ngOnInit() {
    this.getUser();
    this.getUserPastOrders();
    this.getUserFutureOrders();
    this.getUserPastMeals();
    this.getUserFutureMeals();
  }

  getUser() {
    this.http.get(`${this.url}/user`).subscribe((user: any) => {
      this.user = user;
    });
  }

  getUserPastMeals() {
    this.http
      .get(`${this.url}/user/meals/past`)
      .subscribe((userPastMeals: any) => {
        this.userPastMeals = userPastMeals;
      });
  }

  getUserFutureMeals() {
    this.http
      .get(`${this.url}/user/meals/future`)
      .subscribe((userFutureMeals: any) => {
        this.userFutureMeals = userFutureMeals;
      });
  }

  openMealHandoutList(id) {
    this.router.navigateByUrl("/app/profile/handouts/" + id);
  }

  getUserPastOrders() {
    this.http
      .get(`${this.url}/user/orders/past`)
      .subscribe((userPastOrders: any) => {
        this.userPastOrders = userPastOrders;
      });
  }

  getUserFutureOrders() {
    this.http
      .get(`${this.url}/user/orders/future`)
      .subscribe((userFutureOrders: any) => {
        this.userFutureOrders = userFutureOrders;
      });
  }

  logout() {
    this.authService.logout();
  }
}
