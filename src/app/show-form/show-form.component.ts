import { Component } from '@angular/core';
import {Show} from '../show'
import { NullAstVisitor } from '@angular/compiler';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css']
})
export class ShowFormComponent {

  model = new Show("","",null,"")
  
  submitted = false;

  onSubmit(){ this.submitted = true;}
  
  newShow(){
    this.model = new Show('','',0,'')
  }

}
