import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './employer-login/employer-login.component';
import { JobComponent } from './job-post/jobcreation/job.component';
import { SignupComponent } from './employer-signup/employer-signup.component';
import { AdminComponent } from './admin/admin.component';
//import { JobmanagerComponent } from './job-post/jobmanager/jobmanager.component';
import { JobDeleteComponent } from './job-post/job-delete/job-delete.component';
import { JobUpdateComponent } from './job-post/job-update/job-update.component';
import { JobseekerInfoComponent } from './jobseeker-info/jobseeker-info.component';
import { JobseekerLoginComponent } from './jobseeker-login/jobseeker-login.component';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { JobseekerSignupComponent } from './jobseeker-signup/jobseeker-signup.component';
import { EmployerInfoComponent } from './employer-info/employer-info.component';
import { EmployerComponent } from './employer/employer.component';
import {SearchComponent} from './search/search.component'
import { JobmanagerComponent } from './employer/jobmanager/jobmanager.component';
import { EmployerUpdateComponent } from './employer/employer-update/employer-update.component';
import { JobseekerUpdateComponent } from './jobseeker/jobseeker-update/jobseeker-update.component';
import { ViewJobsComponent } from './jobseeker/view-jobs/view-jobs.component';
import { ApplyComponent } from './apply/apply.component';
import { AdminManagerComponent } from './admin/admin-manager/admin-manager.component';
import { AdminJobManagerComponent } from './admin/admin-job-manager/admin-job-manager.component';
import { AdminEmployerManagerComponent } from './admin/admin-employer-manager/admin-employer-manager.component';
import { AdminJobseekerManagerComponent } from './admin/admin-jobseeker-manager/admin-jobseeker-manager.component';


const appRoutes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'apply', component: ApplyComponent },
  { path: 'employerlogin', component: LoginComponent },
  { path: 'employerinfo', component: EmployerInfoComponent },
  { path: 'employer', component: EmployerComponent,
    children : [
      { path: 'jobmanager', component: JobmanagerComponent ,
        children : [
          { path: 'job', component: JobComponent },
          { path: 'jobupdate', component: JobUpdateComponent },
          { path: 'jobdelete', component: JobDeleteComponent },
            ]
    },
    { path: 'employerupdate', component: EmployerUpdateComponent },      
    ]
},

  { path: 'employersignup', component: SignupComponent },
  //{ path: 'employerupdate', component: EmployerUpdateComponent },
  { path: 'job', component: JobComponent },
  { path: 'admin', component: AdminComponent }, 
  //{ path: 'jobmanager', component: JobmanagerComponent },
  { path: 'jobupdate', component: JobUpdateComponent },
  { path: 'jobdelete', component: JobDeleteComponent },
  { path: 'jobseekerinfo', component: JobseekerInfoComponent },

  { path: 'jobseeker', component: JobseekerComponent ,
    children : [
    { path: 'jobseekerupdate', component: JobseekerUpdateComponent },
    { path: 'jobdelete', component: JobDeleteComponent },
    { path: 'viewjobs', component: ViewJobsComponent },
      ]
},
  { path: 'jobseekerlogin', component: JobseekerLoginComponent },
  { path: 'jobseekersignup', component: JobseekerSignupComponent },
  { path: 'search', component: SearchComponent },
  { path: 'admin-manager', component: AdminManagerComponent,
  children : [
    { path: 'adminjob', component: AdminJobManagerComponent },
    { path: 'adminemployer', component: AdminEmployerManagerComponent },
    { path: 'adminjobseeker', component: AdminJobseekerManagerComponent },
      ]
  },
  
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
