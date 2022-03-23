import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent{
    passwordInput = '';
    userInput='';
    loggedin = localStorage.getItem('loggedin');
    error = ''
    constructor(private router: Router) {}
    loginUser() {
        console.log(this.userInput);
        if (this.userInput == 'admin' || this.passwordInput == 'admin') {
            localStorage.setItem('loggedin', "true");
            this.router.navigate(["/todos"]);
            this.loggedin = localStorage.getItem('loggedin');
        } else {
            this.error = 'Wrong Password';
        }
        
    }
    logout() {
        localStorage.removeItem('loggedin');
        this.router.navigate(["/"]);
        this.loggedin = localStorage.getItem('loggedin');
    }

}