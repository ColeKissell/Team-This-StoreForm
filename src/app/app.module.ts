import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowDetailComponent} from './show-detail/show-detail.component'
import { ShowComponent } from './show/show.component';
import { ShowSearchComponent } from './show-search/show-search.component';
import { MessagesComponent } from './messages/messages.component';

import {ShowFormComponent} from './show-form/show-form.component';
import { UserFormComponent } from './user-form/user-form.component';
// import { LoginFormComponent } from './login-form/login-form.component';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    ShowFormComponent,
    UserFormComponent,
    // LoginFormComponent,
    ShowDetailComponent,
    ShowComponent,
    MessagesComponent,
    DashboardComponent,
    ShowSearchComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }