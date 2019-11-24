import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-info",
  templateUrl: "./info.page.html",
  styleUrls: ["./info.page.scss"]
})
export class InfoPage implements OnInit {
  user: any;
  url = environment.url;
  constructor(public http: HttpClient) {
    this.user = [];
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.http.get(`${this.url}/user`).subscribe((user: any) => {
      this.user = user;
    });
  }
}
