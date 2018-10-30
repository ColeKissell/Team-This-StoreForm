import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Show } from '../models/show';
import { ShowService }  from '../show.service';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})

export class ShowDetailComponent implements OnInit {
  @Input() show: Show;
  constructor(
    private route: ActivatedRoute,
    private showService: ShowService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getShow();
  }
  getShow(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.showService.getShow(id)
      .subscribe(show => this.show = show);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.showService.updateShow(this.show)
      .subscribe(() => this.goBack());
  }
}
