import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

interface GeneralResponse {
  message: string;
}

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Appli Blanche';
  response = '';

  // eslint-disable-next-line no-useless-constructor,no-unused-vars,no-empty-function
  constructor(private http: HttpClient) {}

  helloThere() {
    this.http
      .get<GeneralResponse>(`${environment.backendUrl}/hello`)
      .subscribe((data: GeneralResponse) => {
        this.response = data.message;
      });
  }
}
