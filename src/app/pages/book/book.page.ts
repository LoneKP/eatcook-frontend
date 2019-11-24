import { Component, OnInit } from "@angular/core";
import { NavParams, ModalController } from "@ionic/angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiRequestsService } from "../../services/api-requests.service";

@Component({
  selector: "app-book",
  templateUrl: "./book.page.html",
  styleUrls: ["./book.page.scss"]
})
export class BookPage implements OnInit {
  meal = null;
  amount = null;
  orderAmount = 1;
  mealsOrderForm: FormGroup;
  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private ApiRequestsService: ApiRequestsService
  ) {}

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }

  ngOnInit() {
    this.meal = this.navParams.get("meal");
    this.amount = this.meal["amount"];

    this.mealsOrderForm = this.formBuilder.group({
      orderAmount: [this.orderAmount],
      mealId: [this.meal["id"]]
    });
  }

  onSubmit() {
    this.createOrder(this.mealsOrderForm.value);
    console.log(this.mealsOrderForm.value);
  }

  addValue() {
    this.orderAmount += 1;
    if (this.orderAmount >= this.amount) {
      this.orderAmount = this.amount;
    }
  }

  subtractValue() {
    this.orderAmount -= 1;
    if (this.orderAmount <= 1) {
      this.orderAmount = 1;
    }
  }

  createOrder(data) {
    this.ApiRequestsService.create(
      "/orders",
      data
    ).subscribe((orders: any) => {});
  }
}
