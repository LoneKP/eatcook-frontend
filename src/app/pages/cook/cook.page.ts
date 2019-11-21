import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiRequestsService } from "../../services/api-requests.service";
import { environment } from "../../../environments/environment";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-cook",
  templateUrl: "./cook.page.html",
  styleUrls: ["./cook.page.scss"]
})
export class CookPage implements OnInit {
  mealsForm: FormGroup;
  url = environment.url;
  minDate = new Date();

  constructor(
    public http: HttpClient,
    private ApiRequestsService: ApiRequestsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    console.log(this.minDate);
    this.mealsForm = this.formBuilder.group({
      name: [""],
      description: [""],
      tags: [""],
      date: [""],
      time: [""],
      address: [""],
      zip: [""],
      city: [""],
      number_of_meals: [""],
      packaging: [false]
    });
  }

  onSubmit() {
    this.createMeal(this.mealsForm.value);
    // console.log(this.mealsForm.value);
  }

  createMeal(data) {
    this.ApiRequestsService.create(
      "/meals",
      data
    ).subscribe((meals: any) => {});
  }
}
