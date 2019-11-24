import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { ModalController } from "@ionic/angular";
import { BookPage } from "../../book/book.page";

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
    public modalController: ModalController
  ) {
    this.meal = [];
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: BookPage,
      componentProps: {
        meal: this.meal
      }
    });
    return await modal.present();
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
}
