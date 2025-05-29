import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobFormComponent } from './pages/job-form/job-form.component';
import { JobScraperComponent } from './pages/job-scraper/job-scraper.component';
import { JobListingsComponent } from './pages/job-listings/job-listings.component';

const routes: Routes = [
  { path: '', redirectTo: 'job-form', pathMatch: 'full' },
  { path: 'job-form', component: JobFormComponent },
  { path: 'job-scraper', component: JobScraperComponent },
  { path: 'job-listings', component: JobListingsComponent },
  { path: '**', redirectTo: 'job-form' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
