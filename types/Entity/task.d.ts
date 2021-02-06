import { Entity } from "./entity";
export declare class Task extends Entity {
    private _completed;
    private _priority;
    constructor(title: string, priority: number);
    get completed(): boolean;
    set completed(value: boolean);
    get priority(): number;
    set priority(value: number);
}
