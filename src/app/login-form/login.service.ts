import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  public loginForm(userName: string, password: string) {
    return this.http.get<any>("http://localhost:8083/api/v1/login/getLogin/" + userName + "/" + password);
  }
}
