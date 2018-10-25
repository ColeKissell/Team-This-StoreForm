import { Component, OnInit } from '@angular/core';
import {Show} from '../models/show'
import {ShowService} from '../show.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  shows: Show[]=[];
  constructor(private showService: ShowService) { }

  ngOnInit() {
    this.getShows();
  }
  getShows(): void {
    this.showService.getShows()
      .subscribe(heroes => this.shows = this.shows.slice(1, 5));
  }
}
