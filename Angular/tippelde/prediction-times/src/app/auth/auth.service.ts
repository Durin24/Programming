import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface AuthResponseData {
    email: string;
    idToken: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private http: HttpClient) {}

signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAUfhqXj3eKVTjfx6JaR_BFi7kE1LeBo60',
    {email, password, returnSecureToken: true});
}

logIn(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAUfhqXj3eKVTjfx6JaR_BFi7kE1LeBo60',
    {email, password, returnSecureToken: true});
}

logout() {
    
}

}
