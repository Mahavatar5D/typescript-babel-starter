import { Entity } from "./entity";
export declare class Task extends Entity {
    private _title;
    private _completed;
    private _priority;
    constructor(title: string, priority: number);
    get title(): string;
    set title(value: string);
    get completed(): boolean;
    set completed(value: boolean);
    get priority(): number;
    set priority(value: number);
}
