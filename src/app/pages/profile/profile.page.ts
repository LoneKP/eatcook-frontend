import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"]
})
export class ProfilePage implements OnInit {
  constructor(private authService: AuthService, private storage: Storage) {}

  ngOnInit() {}
  logout() {
    this.authService.logout();
  }
}
