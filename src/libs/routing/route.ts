import { Component } from "@libs/core/component";
import { CanActive } from "./can-active";

export interface Route {
    path: string;
    component: typeof Component;
    canActive: CanActive[];
}