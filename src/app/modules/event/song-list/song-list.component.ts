import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource} from '@angular/material';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {switchMap, debounceTime} from 'rxjs/operators';
import {ISongResponse, Song} from "../../models/Song";
import {HttpClient} from "@angular/common/http";
import {environment} from '../../../../environments/environment';
import {SongService} from "../../../services/song-service/song.service";


@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  dataSource: Song[] = [];
  displayedColumns = [
    'id',
    'title',
    'operations'
  ];
  filteredSongs: Observable<ISongResponse>;
  songsForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<SongListComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private http: HttpClient, private fb: FormBuilder, private songService: SongService) {
  }

  ngOnInit() {
    this.songsForm = this.fb.group({
      songInput: null
    });

    this.filteredSongs = this.songsForm.get('songInput').valueChanges
      .pipe(
        debounceTime(300),
        switchMap(value => this.songService.search({title: value}, 1))
      );

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteSong(id) {

  }

  displayFn(song: Song) {
    if (song) { return song['title']; }
  }

  addSong(value) {
    // console.log(this.songsForm.get('songInput').value);
    // let songInput = this.songsForm.get('songInput').value;
    let song = {
      id: value.id,
      title: value.title
    };
    this.dataSource.push(song);
    this.dataSource = [...this.dataSource];
    console.log(this.dataSource);
  }

  close(){
    this.dialogRef.close();
  }

  saveSongList() {
    this.dialogRef.close(this.dataSource);
  }


}
