import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  public getEvents(){
    return this.httpClient.get(this.url+'/events');
  }


  public addEvent(event: any) {
    return this.httpClient.post(this.url+'/events/add', event);
  }

  public deleteEvent(id: number) {
    let event_id = {
      id: id
    };
    return this.httpClient.post(this.url+'/events/delete', event_id);
  }
}
