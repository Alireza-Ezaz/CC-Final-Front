export class NoteDTO {
  public id: number;
  public noteBody: string;
  public link: string;
  public exp: Date;


  constructor(
    id: number,
    noteBody: string,
    link: string,
    exp: Date,
  ) {
    this.id = id;
    this.noteBody = noteBody;
    this.link = link;
    this.exp = exp
  }
}
