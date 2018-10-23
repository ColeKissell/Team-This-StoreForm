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

  constructor(){     }



  onSubmit(){ this.submitted = true; fetch('https://hapi-practice-ftjjbqgvls.now.sh/shows', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: this.convertShow()  // body data type must match "Content-Type" header
    })
    .then(response => response.json());
  } // parses response to JSON
  
  // .then(function(response) {
  //   return response.json()
  // }).then(function(myJson) {
  //   console.log(myJson);
  // });

 
  

  // console.log(this.convertShow)
    // return this.convertShow;
  // };
  ngOnInit(){
    
  
  }
  
  
  newShow(){
    this.model = new Show('','',0,'')
  }

  convertShow(){
    const test = JSON.stringify(this.model);
    console.log(test);

    const newJsonObject=JSON.parse(test)
    console.log(newJsonObject);
    return test
  }
  
  getShows(){
      fetch('https://hapi-practice-ftjjbqgvls.now.sh/shows').then(function(response) {
      return response.json()
    }).then(function(myJson) {
      console.log(myJson);
    });
  }

}

