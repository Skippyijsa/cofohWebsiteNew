import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private activeRouter: ActivatedRoute, private router: Router) {}

  title = 'cofohWebsiteNew';

  codeOfConduct() {
    //console.log("Going to form to add: " + this.profID);
    this.router.navigate(['code-of-conduct']);
  }
  programming() {
    //console.log("Going to form to add: " + this.profID);
    this.router.navigate(['programming']);
  }
  attend() {
    //console.log("Going to form to add: " + this.profID);
    this.router.navigate(['attend']);
  }
  contactUs() {
    //console.log("Going to form to add: " + this.profID);
    this.router.navigate(['contact-us']);
  }
  getInvolved() {
    //console.log("Going to form to add: " + this.profID);
    this.router.navigate(['get-involved']);
  }
  sponsorship() {
    //console.log("Going to form to add: " + this.profID);
    this.router.navigate(['sponsorship']);
  }
  home() {
    //console.log("Going to form to add: " + this.profID);
    this.router.navigate(['']);
  }
}
