import { SubscriptionMessage } from './subscription-message.type';
import { Observable } from './observable';
import { Subscriber } from './subscriber';
import { Subscription } from './subscription';

export class Subject<T> {
    private subscribers: Subscriber<T>[] = [];

    public subscribe(onMessage: SubscriptionMessage<T>): Subscription {
        const subscriber: Subscriber<T> = new Subscriber(onMessage);
        this.subscribers.push(subscriber);

        return new Subscription(() => {
            this.unsubscribe(subscriber);
        });
    }

    public unsubscribe(subscriber: Subscriber<T>): void {
        this.subscribers = this.subscribers.filter((s) => s !== subscriber);
    }

    public unsubscribeAll(): void {
        this.subscribers = [];
    }

    public notify(value: T): void {
        this.subscribers.forEach((subscriber: Subscriber<T>): void => {
            subscriber.next(value);
        });
    }

    public asObservable(): Observable<T> {
        return new Observable((onMessage: SubscriptionMessage<T>): Subscription => {
            return this.subscribe(onMessage);
        });
    }
}