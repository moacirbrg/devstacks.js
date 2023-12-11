import { Unsubscribe } from './unsubscribe.type.js';

export class Subscription {
    private readonly onUnsubscribe: Unsubscribe;

    public constructor(onUnsubscribe: Unsubscribe) {
        this.onUnsubscribe = onUnsubscribe;
    }

    public unsubscribe(): void {
        this.onUnsubscribe();
    }
}