import { Route } from './route';

export abstract class CanActive {
    abstract canActive(route: Route): boolean;
}