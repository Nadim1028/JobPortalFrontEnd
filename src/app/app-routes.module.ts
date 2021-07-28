import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { JobComponent } from './job-post/jobcreation/job.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { JobmanagerComponent } from './job-post/jobmanager/jobmanager.component';
import { JobDeleteComponent } from './job-post/job-delete/job-delete.component';
import { JobUpdateComponent } from './job-post/job-update/job-update.component';
import { JobseekerInfoComponent } from './jobseeker-info/jobseeker-info.component';


const appRoutes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'employerlogin', component: LoginComponent },
  { path: 'job', component: JobComponent },
  { path: 'employersignup', component: SignupComponent },
  { path: 'admin', component: AdminComponent }, 
  { path: 'jobmanager', component: JobmanagerComponent },
  { path: 'jobupdate', component: JobUpdateComponent },
  { path: 'jobdelete', component: JobDeleteComponent },
  { path: 'jobseekerinfo', component: JobseekerInfoComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
