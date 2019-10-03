import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {Event} from '../../models/Event';
import {MatTableDataSource, MatPaginator, MatSort} from "@angular/material";
import {EventService} from "../../../services/event-service/event.service";
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-event-log',
  templateUrl: './event-log.component.html',
  styleUrls: ['./event-log.component.css']
})
export class EventLogComponent implements OnInit {

  dataSource: any;
  events: Event[];

  displayedColumns = [
    'date_created',
    'title',
    'date',
    'operations'
  ];

  // events:  Event[] = [
  //   { id:1, date_created: new Date(),title:'Event 001',date: new Date()},
  //   /*...*/
  // ];

  // dataSource  =  new  MatTableDataSource<Event>(this.events);

  constructor(private  router:  Router, private eventService: EventService){ }

  ngOnInit() {
    this.eventService.getEvents().subscribe((data) => {
      console.log(data);
      this.dataSource = data['data'];
    });
  }

  AddEvent() {
    this.router.navigate(['/add-event']);
  }

  editEvent(id) {

  }

  deleteEvent(id) {
    this.eventService.deleteEvent(id).subscribe((data) => {
      console.log(data);
    });
  }

  viewRecord(row) {
    console.log(row);
    this.router.navigate(['/add-event', row]);
  }

}
