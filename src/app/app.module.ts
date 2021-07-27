import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './service/login.service';
import { JobComponent } from './job-post/jobcreation/job.component';
import { AppRoutesModule } from './app-routes.module';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { EmployerComponent } from './employer/employer.component';
import {MatDialogModule} from '@angular/material/dialog';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { JobmanagerComponent } from './job-post/jobmanager/jobmanager.component';
import { JobUpdateComponent } from './job-post/job-update/job-update.component';
import { JobDeleteComponent } from './job-post/job-delete/job-delete.component';

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
    JobDeleteComponent  
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
    MatDialogModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
