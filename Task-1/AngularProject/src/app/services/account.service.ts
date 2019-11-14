import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from '../entity/register';

@Injectable({
  providedIn: 'root'
})


export class AccountService {
    //Url: string;
    //token: string;
    //header: any; 
    //private url = "https://localhost:44334/api/account";

    //constructor(private http: HttpClient)
    //{
    //    this.Url = 'https://localhost:44334/api/account';
    //    const headerSettings: { [name: string]: string | string[]; } = {};
    //    this.header = new HttpHeaders(headerSettings);  
    //}

    //createUser(user: Register) {
    //    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    //    //return this.http.post(this.Url, user);
    //    return this.http.post<Register[]>(this.Url + '/createcontact', user, httpOptions)
    //}

    //singInUser() {

    //}
    Url: string;
    token: string;
    header: any;
    constructor(private http: HttpClient) {
        this.Url = "https://localhost:44334/api/account";
        const headerSettings: { [name: string]: string | string[]; } = {};
        this.header = new HttpHeaders(headerSettings);
    }
    Login(model: any) {
        return this.http.post<any>(this.Url + "/LoginUser", model, { headers: this.header });
    }
    CreateUser(register: Register) {
        return this.http.post(this.Url + "/RegisterUser", register);
    }

}