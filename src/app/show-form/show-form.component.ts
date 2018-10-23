import { Component, OnInit } from '@angular/core';
import {Show} from '../models/show'
// import { NullAstVisitor } from '@angular/compiler';
// import {ShowsService} from '../shows.service'
// import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css']
})
export class ShowFormComponent implements OnInit {
  

  model = new Show("","",null,"")
  
  submitted = false;

  constructor(){}


  onSubmit(){ this.submitted = true; 
  
  // console.log(this.convertShow)
    // return this.convertShow;
  };
  ngOnInit(){
    
  
  }
  
  
  newShow(){
    this.model = new Show('','',0,'')
  }

  convertShow(){
    const test = JSON.stringify(this.model);
    console.log(test);
    console.log(typeof(test))
    const newJsonObject=JSON.parse(test)
    console.log(newJsonObject);
    console.log(typeof(newJsonObject))
  }
  
  getShows(){
      fetch('https://hapi-practice-ftjjbqgvls.now.sh/shows').then(function(response) {
      return response.json()
    }).then(function(myJson) {
      console.log(myJson);
    });
  }

}

