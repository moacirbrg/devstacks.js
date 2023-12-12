import { TypoMessageColor } from "./typo-message.enum";
import { FrameworkElement } from "../../../core/framework-element";
import { Component } from "../../../core/component";
import { ComponentProps } from "../../../core/component-props";
import { DOM } from '../../../core/dom';

export interface UiTypoMessageProps extends ComponentProps {
    Color: TypoMessageColor;
}

export class TypoMessageShared extends Component<UiTypoMessageProps> {
    public render(): FrameworkElement {
        return (
            <div class={`typo-message-shared ${this.props.Color}`}>
                {this.children}
            </div>
        );
    }

    public setColor(color: TypoMessageColor): void {
        this.props.Color = color;
        DOM.setAttribute(this.element!, 'class', `typo-message-shared ${this.props.Color}`);
    }

    public setContent(content: string|FrameworkElement): void {
        this.children = [content];
        DOM.replaceChildren(this.element!, ...this.children as string[]|FrameworkElement[]);
    }
}