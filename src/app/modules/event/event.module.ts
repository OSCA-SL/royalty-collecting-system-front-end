import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import {SongListComponent} from "./song-list/song-list.component";
import {AddEventComponent} from "./add-event/add-event.component";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,  DateRangePickerModule
  ],
  entryComponents: [
    SongListComponent, // THE MAGIC HAPPENDS HERE
    AddEventComponent
  ]
})
export class EventModule { }
