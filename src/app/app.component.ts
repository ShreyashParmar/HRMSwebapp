import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HRMSwebapp';
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private http: HttpClient) { }

  login(): void {
    this.http.post<any>('/login', { username: this.username, password: this.password })
      .subscribe(
        data => {
          this.message = data.message;
        },
        error => {
          console.error('Error:', error);
          this.message = 'An error occurred during login.';
        }
      );
  }
}
