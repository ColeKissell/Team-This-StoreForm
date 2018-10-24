import { Component, OnInit } from '@angular/core';
import { FetchdataService } from './fetchdata-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[FetchdataService]
})
export class AppComponent implements OnInit{
  posts=[''];
  title='Angular HttpClient';
  Url = "https://hapi-practice-uodxjalzjs.now.sh/shows"
  Url1 = "https://jsonplaceholder.typicode.com/posts"

  // inject FetchdataService service
  constructor(private srv: FetchdataService) { }

  getPosts() : void {
    this.srv.getData(this.Url)
      .subscribe(
        (data) => {this.posts.push(...data)},
        (error)=> {console.log(error)}
      )
  }
 
  ngOnInit(){
    this.getPosts()
  }
}
