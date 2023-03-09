import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DownloadComponent } from './download/download.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'redirect', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, data: { animation: 'dashboardPage' } },
  { path: 'upload', component: UploadComponent, data: { animation: 'uploadPage' } },
  { path: 'download', component: DownloadComponent, data: { animation: 'downloadPage' } },
  { path: 'login', component: LoginComponent, data: { animation: 'loginPage' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
