import "./typo-message.component.scss";
import { TypoMessageColor } from "./typo-message-color.enum";
import { FrameworkElement } from "@libs/core/framework-element";
import { Component } from "@libs/core/component";
import { ComponentProps } from "@libs/core/component-props";
import { DOM } from '@libs/core/dom';

export interface TypoMessageProps extends ComponentProps {
    Color: TypoMessageColor;
}

export class TypoMessage extends Component<TypoMessageProps> {
    public render(): FrameworkElement {
        return (
            <div class={`typo-message-component ${this.props.Color}`}>
                {this.children}
            </div>
        );
    }

    public setColor(color: TypoMessageColor): void {
        this.props.Color = color;
        DOM.setAttribute(this.element!, 'class', `typo-message-component ${this.props.Color}`);
    }

    public setContent(content: string|FrameworkElement): void {
        this.children = [content];
        DOM.replaceChildren(this.element!, ...this.children as string[]|FrameworkElement[]);
    }
}