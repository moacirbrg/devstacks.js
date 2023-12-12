export class DsError extends Error {
    public innerError: Error|null;

    public constructor(message: string, innerError: Error|null = null) {
        super(message);
        this.name = 'DsError';
        this.innerError = innerError;
    }
}