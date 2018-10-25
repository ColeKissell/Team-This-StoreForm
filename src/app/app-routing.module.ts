import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ShowComponent} from './show/show.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import {ShowDetailComponent} from "./show-detail/show-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ShowDetailComponent },
  { path: 'shows', component: ShowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}