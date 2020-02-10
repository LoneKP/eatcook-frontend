import { Platform, AlertController } from "@ionic/angular";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { AuthService } from "./auth.service";
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiRequestsService {
  url = environment.url;
  constructor(
    private http: HttpClient,
    authService: AuthService,
    private alertController: AlertController
  ) {}

  create(path, data) {
    return this.http.post(`${this.url}` + path, data).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  update(path, data) {
    return this.http.post(`${this.url}` + path, data).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  uploadImage(file, path) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post<any>(`${this.url}` + path, formData);
  }

  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: "Error",
      buttons: ["OK"]
    });
    alert.then(alert => alert.present());
  }
}
