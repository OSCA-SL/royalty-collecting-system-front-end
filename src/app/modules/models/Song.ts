export class Song {
  constructor(public id: number, public title: string) {}
}

export interface ISongResponse {
  message: string;
  data: Song[];
}
