import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendComponent } from './attend/attend.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { SponsorshipComponent } from './sponsorship/sponsorship.component';
import { HomeComponent } from './home/home.component';
import { ProgrammingComponent } from './programming/programming.component';
import { CodeOfConductComponent } from './code-of-conduct/code-of-conduct.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'attend', component: AttendComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'get-involved', component: GetInvolvedComponent },
  { path: 'sponsorship', component: SponsorshipComponent },
  { path: 'programming', component: ProgrammingComponent },
  { path: 'code-of-conduct', component: CodeOfConductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
