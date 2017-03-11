import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  private person: Person;

  constructor(private route: ActivatedRoute,
              private service: PersonService) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.service.getPerson(params['id'])
          .subscribe( person => { this.person = person; });
      });
  }
}





