import { Entity } from "./entity";

export class Task extends Entity {
  private _title: string
  private _completed: boolean = false;
  private _priority: number;

  constructor(title: string, priority: number) {
    super();
    this._title = title
    this._priority = priority
  }

  public get title(): string {
    return this._title
  }

  public set title(value : string) {
    this._title = value;
    this.updatedAt = new Date
  }

  public get completed() : boolean {
    return this._completed;
  }

  public set completed(value : boolean) {
    this._completed = value;
    this.updatedAt = new Date
  }

  public get priority() : number {
    return this._priority;
  }

  public set priority(value : number) {
    this._priority = value;
    this.updatedAt = new Date
  }
}
