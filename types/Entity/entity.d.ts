import { Guid } from "@microsoft/sp-core-library";
export declare abstract class Entity {
    private _id;
    private _createdAt;
    private _updatedAt;
    constructor();
    protected get id(): Guid;
    protected get createdAt(): Date;
    protected get updatedAt(): Date;
    protected set updatedAt(value: Date);
}
