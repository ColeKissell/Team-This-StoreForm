import { Component, OnInit } from '@angular/core';
import {User} from '../models/users'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  model = new User("","","","","","",null)
  
  submitted = false;

  onSubmit(){ this.submitted = true;}
  
  newShow(){
    this.model = new User('','','','','','',0)
  }
}
