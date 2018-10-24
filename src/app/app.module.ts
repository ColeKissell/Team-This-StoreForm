import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule} from "@angular/common/http"

import { AppComponent }  from './app.component';
import {ShowFormComponent} from './show-form/show-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { LoginFormComponent } from './login-form/login-form.component'

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ShowFormComponent,
    UserFormComponent,
    LoginFormComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }