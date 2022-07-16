import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface GeneralResponse {
  message: string;
}

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.css"],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "frontend";
  response = "";

  // eslint-disable-next-line no-useless-constructor,no-unused-vars,no-empty-function
  constructor(private http: HttpClient) {}

  helloThere() {
    this.http
      .get<GeneralResponse>("http://localhost:3000/api/hello")
      .subscribe((data: GeneralResponse) => {
        this.response = data.message;
      });
  }
}
