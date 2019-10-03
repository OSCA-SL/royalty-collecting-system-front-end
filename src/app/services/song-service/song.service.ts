import { Injectable } from '@angular/core';
import {ISongResponse, Song} from "../../modules/models/Song";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  search(filter: {title: string} = {title: ''}, page = 1): Observable<ISongResponse> {
    return this.http.get(this.url + '/songs')
      .pipe(
        tap((response: ISongResponse) => {
          response.data = response.data
            .map(song => new Song(song.id, song.title))
            // Not filtering in the server since in-memory-web-api has somewhat restricted api
            .filter(song => song.title.toLocaleLowerCase().includes(filter.title));

          return response;
        })
      );
  }
}
