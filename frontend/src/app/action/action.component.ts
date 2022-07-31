import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface IGeneralResponse {
  message: string;
}

@Component({
  selector: 'app-action',
  styleUrls: ['./action.component.css'],
  templateUrl: './action.component.html',
})
export class ActionComponent {
  response = '';

  // eslint-disable-next-line no-useless-constructor,no-unused-vars,no-empty-function
  constructor(private http: HttpClient) {}

  helloThere() {
    this.http
      .get<IGeneralResponse>(`${environment.backendUrl}/hello`)
      .subscribe((data: IGeneralResponse) => {
        this.response = data.message;
      });
  }
}
