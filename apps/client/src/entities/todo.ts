export class TodoEntity {
  private id?: number;
  private title: string;

  constructor({ id, title }: { id: number; title: string }) {
    this.id = id;
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  getId() {
    return this.id;
  }
}
