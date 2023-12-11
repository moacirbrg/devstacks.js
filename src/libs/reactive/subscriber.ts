import { SubscriptionMessage } from './subscription-message.type';

export class Subscriber<T> {
    private readonly onMessage: SubscriptionMessage<T>;

    public constructor(onMessage: SubscriptionMessage<T>) {
        this.onMessage = onMessage;
    }

    public next(value: T): void {
        this.onMessage(value);
    }
}