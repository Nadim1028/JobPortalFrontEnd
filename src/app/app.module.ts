import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './employer-login/employer-login.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './service/employer-login.service';
import { JobComponent } from './job-post/jobcreation/job.component';
import { AppRoutesModule } from './app-routes.module';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './employer-signup/employer-signup.component';
import { AdminComponent } from './admin/admin.component';
import { EmployerComponent } from './employer/employer.component';
import { JobmanagerComponent } from './employer/jobmanager/jobmanager.component';

import {MatDialogModule} from '@angular/material/dialog';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
//import { JobmanagerComponent } from './job-post/jobmanager/jobmanager.component';
import { JobUpdateComponent } from './job-post/job-update/job-update.component';
import { JobDeleteComponent } from './job-post/job-delete/job-delete.component';
import { BarComponent } from './bar/bar.component';
import { JobseekerLoginComponent } from './jobseeker-login/jobseeker-login.component';
import { JobseekerSignupComponent } from './jobseeker-signup/jobseeker-signup.component';
import { JobseekerInfoComponent } from './jobseeker-info/jobseeker-info.component';
import { EmployerInfoComponent } from './employer-info/employer-info.component';
import { SearchComponent } from './search/search.component';
import { EmployerUpdateComponent } from './employer/employer-update/employer-update.component';
import { JobseekerUpdateComponent } from './jobseeker/jobseeker-update/jobseeker-update.component';
import { ViewJobsComponent } from './jobseeker/view-jobs/view-jobs.component';
import { ApplyComponent } from './apply/apply.component';
import { AdminManagerComponent } from './admin/admin-manager/admin-manager.component';
import { AdminJobManagerComponent } from './admin/admin-job-manager/admin-job-manager.component';
import { AdminEmployerManagerComponent } from './admin/admin-employer-manager/admin-employer-manager.component';
import { AdminJobseekerManagerComponent } from './admin/admin-jobseeker-manager/admin-jobseeker-manager.component';
import { ApplicantsComponent } from './employer/applicants/applicants.component';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    JobComponent,
    HomeComponent,
    SignupComponent,
    AdminComponent,
    EmployerComponent,
    JobseekerComponent,
    JobmanagerComponent,
    JobUpdateComponent,
    JobDeleteComponent,
    BarComponent,
    JobseekerLoginComponent,
    JobseekerSignupComponent,
    JobseekerInfoComponent,
    EmployerInfoComponent,
    SearchComponent,
    EmployerUpdateComponent,
    JobseekerUpdateComponent,
    ViewJobsComponent,
    ApplyComponent,
    AdminManagerComponent,
    AdminJobManagerComponent,
    AdminEmployerManagerComponent,
    AdminJobseekerManagerComponent,
    ApplicantsComponent  
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatFormFieldModule,
    RouterModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutesModule,
    MatDialogModule,
    Ng2SearchPipeModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
