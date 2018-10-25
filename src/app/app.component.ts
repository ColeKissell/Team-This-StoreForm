import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{
  posts=[''];
  title='Angular HttpClient';
  Url = "http://localhost:3000/shows"


 
  ngOnInit(){
  }
}
