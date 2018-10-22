import { Component } from '@angular/core';
import {Login} from '../models/login'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  model = new Login("","")
  
  submitted = false;

  onSubmit(){ this.submitted = true;}
  
  newLogin(){
    this.model = new Login('','')
  }

}

