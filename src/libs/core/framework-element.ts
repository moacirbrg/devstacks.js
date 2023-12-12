import { Component } from './component';

export interface FrameworkElement extends HTMLElement {
    component?: Component;
    if?: boolean;
}