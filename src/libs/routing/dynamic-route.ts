import { Route } from "./route";

export interface DynamicRoute {
    route: Route;
    segments: string[];
}