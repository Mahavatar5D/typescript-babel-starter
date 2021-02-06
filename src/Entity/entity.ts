import { Guid } from "@microsoft/sp-core-library"

export abstract class Entity {
  private _id: Guid
  private _createdAt: Date
  private _updatedAt: Date

  constructor() {
    this._id = Guid.newGuid()
    this._createdAt = new Date()
    this._updatedAt = new Date()
  }

  protected get id(): Guid {
    return this._id
  }

  protected get createdAt(): Date {
    return this._createdAt
  }

  protected get updatedAt(): Date {
    return this._updatedAt
  }

  protected set updatedAt(value : Date) {
    this._updatedAt = value;
  }
}
