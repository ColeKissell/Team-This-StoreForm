import { Component, OnInit } from '@angular/core';
import {Show} from '../models/show'
import {ShowService} from '../show.service'

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {

  shows: Show[];

  constructor(private showService: ShowService) { }

  ngOnInit() {
    this.getShows();
  }

  getShows(): void{
    this.showService.getShows()
    .subscribe(shows => this.shows = shows)
  }

  add(_id: string, name: string, description: string ,price: number, genre: string): void {
    name = name.trim();
    if (!name || !description || !price || !genre) { return; }
    this.showService.addShow({_id, name, description, price, genre } as Show)
      .subscribe(show => {
        this.shows.push(show);
      });
  }
  delete(show: Show): void {
    this.shows = this.shows.filter(s => s !== show);
    this.showService.deleteShow(show).subscribe();
  }
}
