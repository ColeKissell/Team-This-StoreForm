import { Component } from '@angular/core';
import {Show} from '../models/show'
import { NullAstVisitor } from '@angular/compiler';
import {ShowsService} from '../shows.service'

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
