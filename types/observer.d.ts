export interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}
export interface Observer {
    update(subject: Subject): void;
}
export declare class ConcreteSubject implements Subject {
    state: number;
    private observers;
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
    someBusinessLogic(): void;
}
export declare class ConcreteObserverA implements Observer {
    update(subject: Subject): void;
}
export declare class ConcreteObserverB implements Observer {
    update(subject: Subject): void;
}
