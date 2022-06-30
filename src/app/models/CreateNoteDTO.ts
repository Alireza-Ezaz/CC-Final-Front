export class CreateNoteDTO {
  public noteBody: string;

  constructor(
    noteBody: string,
  ) {
    this.noteBody = noteBody;
  }
}
