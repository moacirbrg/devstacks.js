import { ComponentProps } from "./component-props";
import { ElementRef } from "./element-ref";
import { FrameworkElement } from "./framework-element";

export class Component<T = ComponentProps> {
    public children: unknown[] = [];
    public element: FrameworkElement|null;
    public props: T;

    public constructor(props: T | unknown = {}) {
        this.element = null;
        this.props = props as T;
    }

    public static createRef<K extends HTMLElement>(): ElementRef<K> {
        return new ElementRef<K>();
    }

    public onPropChange(_propName: string): void {
        // Do nothing
    }

    public setProp(name: string, newValue: unknown): void {
        const oldValue: unknown = (this.props as Record<string, unknown>)[name];

        if (oldValue !== newValue) {
            (this.props as Record<string, unknown>)[name] = newValue;
            this.onPropChange(name);
        }
    }
}

export interface Component {
    onDestroy?(): void;
    onRendered?(): void;
    render(): FrameworkElement;
}