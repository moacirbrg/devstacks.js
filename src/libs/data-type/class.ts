export interface Class<T> {
    new (..._args: unknown[]): T;
}