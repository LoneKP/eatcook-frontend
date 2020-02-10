import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiRequestsService } from "../../services/api-requests.service";
import { environment } from "../../../environments/environment";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ScrollDetail } from "@ionic/core";

@Component({
  selector: "app-cook",
  templateUrl: "./cook.page.html",
  styleUrls: ["./cook.page.scss"]
})
export class CookPage implements OnInit {
  mealsForm: FormGroup;
  url = environment.url;
  image = null;
  minDate = new Date();
  showToolbar = false;
  elm = null;

  constructor(
    public http: HttpClient,
    private ApiRequestsService: ApiRequestsService,
    private formBuilder: FormBuilder,
    @ViewChild("getFile", { read: ElementRef, static: false })
    private getFile: ElementRef
  ) {}

  onPageEnter() {}

  ngOnInit() {
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

  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 1;
    }
  }

  onSubmit(getFile) {
    this.ApiRequestsService.create("/meals", this.mealsForm.value).subscribe(
      (meal: any) => {
        let elm = getFile.el.firstElementChild;
        if (elm && elm.files && elm.files[0]) {
          let file = elm.files[0];
          console.log("file: ", file);
          this.ApiRequestsService.uploadImage(
            file,
            "/image/" + meal.id
          ).subscribe(result => {
            console.log("new image: ", result);
            this.image = result.meal.image;
          });
        }
      }
    );
  }
}
