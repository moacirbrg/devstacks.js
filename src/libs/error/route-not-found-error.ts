import { DsError } from './ds-error';

export class RouteNotFoundError extends DsError {
    public constructor(path: string, innerError?: Error) {
        super(`Route not found: ${path}`, innerError);
        this.name = 'RouteNotFoundError';
    }
}