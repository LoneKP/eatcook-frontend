import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/environment";
import { ApiRequestsService } from "../../../../services/api-requests.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-name",
  templateUrl: "./name.page.html",
  styleUrls: ["./name.page.scss"]
})
export class NamePage implements OnInit {
  user: any;
  name = null;
  url = environment.url;
  nameField: FormGroup;

  constructor(
    public http: HttpClient,
    private ApiRequestsService: ApiRequestsService,
    private formBuilder: FormBuilder
  ) {
    this.user = [];
  }

  ngOnInit() {
    this.nameField = this.formBuilder.group({
      name: [""]
    });
    this.getUser();
  }

  ionViewWillEnter() {}

  onSubmit() {
    this.updateUser(this.nameField.value);
    // console.log(this.nameField.value);
  }

  updateUser(data) {
    this.ApiRequestsService.create(
      "/user/update",
      data
    ).subscribe((name: any) => {});
  }

  getUser() {
    this.http.get(`${this.url}/user`).subscribe((user: any) => {
      this.user = user;
    });
  }
}
