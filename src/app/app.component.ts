import { Component } from '@angular/core';
import { Location  } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor (private location: Location, private router: Router) {
    var url = this.location.path();
    var loggedIn = localStorage.getItem('loggedin');
    console.log(loggedIn)
    if (url != '' && loggedIn != 'true'){
      console.log('here');
      this.router.navigate(["/"]);
    }
  }
}
