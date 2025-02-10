export class DataMessage {

  private title: string;
  private content: string;
  private type: string;
  private display: string;

  constructor(content?: string, type?: string, title?: string, display?: string);

  constructor(content: string, type: string, title: string, display: string) {
    this.content = content;
    this.type = type;
    this.title = title;
    this.display = display ? display : 'SNACK';
  }

  public get $title(): string {
    return this.title;
  }

  public set $title(value: string) {
    this.title = value;
  }

  public get $content(): string {
    return this.content;
  }

  public set $content(value: string) {
    this.content = value;
  }

  public get $type(): string {
    return this.type;
  }

  public set $type(value: string) {
    this.type = value;
  }

  public get $display(): string {
    return this.display;
  }

  public set $display(value: string) {
    this.display = value;
  }
}
