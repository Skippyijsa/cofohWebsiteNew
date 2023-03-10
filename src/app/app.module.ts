import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AttendComponent } from './attend/attend.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SponsorshipComponent } from './sponsorship/sponsorship.component';
import { ProgrammingComponent } from './programming/programming.component';
import { CodeOfConductComponent } from './code-of-conduct/code-of-conduct.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    AttendComponent,
    GetInvolvedComponent,
    ContactUsComponent,
    HomeComponent,
    SponsorshipComponent,
    ProgrammingComponent,
    CodeOfConductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    FontAwesomeModule,
  ],

  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
