import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {SongListComponent} from "../song-list/song-list.component";
import {Event} from '../../models/Event';
import {EventService} from "../../../services/event-service/event.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  data: any;
  songList: any;
  name: string;
  location: string;
  public date: any;
  public eventType: string;
  public price: any;
  public event: Event;

  constructor(private  router: Router, public dialog: MatDialog, private eventService: EventService) {
  }

  ngOnInit() {
    this.date = new Date();
    this.event = {
      'title': '',
      'date': this.date,
      'id': null,
      'location': '',
      'descp': '',
      'type': '',
      'price': null,
      'created_at': this.date,
      'updated_at': this.date,
      'deleted_at': null
    }

  }

  addSongList() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';
    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
    };

    this.dialog.open(SongListComponent, dialogConfig);
    const dialogRef = this.dialog.open(SongListComponent, dialogConfig);

    dialogRef.afterClosed().pipe(take(1)).subscribe(
      data => console.log("Dialog output:", data)
    );

    // dialogRef.afterClosed().subscribe(
    //   data => console.log("Dialog output:", data)
    // );
  }

  saveEvent() {
    console.log(this.event);
    this.eventService.addEvent(this.event).subscribe(resp => {
      if (resp) {
        let event_id = resp['id'];
        console.log("event added");
      }

    }, err => {
      console.log(err);
    });
  }

  reset() {

  }
}
