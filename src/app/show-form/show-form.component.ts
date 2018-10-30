import {Component,OnInit, Input} from '@angular/core';
import {Show} from '../models/show'
import {ShowService} from '../show.service'
import { ActivatedRoute } from '@angular/router';
// import { Location } from '@angular/common';
@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css']
})
export class ShowFormComponent implements OnInit {
  @Input() show: Show;

  model = new Show('',"","",null,"")
  
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private showService: ShowService,
    // private location: Location,
  ){ }

  ngOnInit(){
    this.getShow();
  }

  getShow(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.showService.getShow(id)
      .subscribe(show => this.show = show);
  }

  onSubmit(){ this.submitted = true;
    
  }

  newShow(){
    this.model = new Show('','','',0,'')
  }

}

