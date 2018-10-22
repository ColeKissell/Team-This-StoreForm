import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import {ShowFormComponent} from './show-form/show-form.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ShowFormComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }