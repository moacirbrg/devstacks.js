import { SubscriptionMessage } from './subscription-message.type';
import { Subscription } from './subscription.js';

export class Observable<T> {
    private readonly onSubscribe: (onMessage: SubscriptionMessage<T>) => Subscription;

    public constructor(onSubscribe: (onMessage: SubscriptionMessage<T>) => Subscription) {
        this.onSubscribe = onSubscribe;
    }

    public subscribe(onMessage: SubscriptionMessage<T>): Subscription {
        return this.onSubscribe(onMessage);
    }

    public unsubscribe(subscription: Subscription): void {
        subscription.unsubscribe();
    }
}