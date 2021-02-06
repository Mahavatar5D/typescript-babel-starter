import { Guid } from "@microsoft/sp-core-library";
export declare abstract class Entity {
    private _id;
    private _title;
    private _creationDate;
    constructor(title: string);
    get id(): Guid;
    get title(): string;
    get creationDate(): Date;
}
