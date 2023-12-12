import { Component } from "./component";
import { FrameworkElement } from "./framework-element";

export class ElementRef<T extends HTMLElement = FrameworkElement> {
    public current: T|null;

    public constructor() {
        this.current = null;
    }

    public getComponent<K extends Component>(): K|null {
        const current = this.current as FrameworkElement;

        if (current && current.component) {
            return current.component as K;
        }

        return null;
    }
}