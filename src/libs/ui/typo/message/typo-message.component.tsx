import "@styles/components/typo/typo-message.vars.scss"
import "./typo-message.component.scss";
import { Color } from "@libs/ui/enums/color.enum";
import { FrameworkElement } from "@libs/core/framework-element";
import { Component } from "@libs/core/component";
import { ComponentProps } from "@libs/core/component-props";
import { DOM } from '@libs/core/dom';
import { DataAttributes } from '@libs/ui/data-attributes';

export interface TypoMessageProps extends ComponentProps {
    Color?: Color;
}

export class TypoMessage extends Component<TypoMessageProps> {
    public render(): FrameworkElement {
        const element = (
            <div class={`typo-message-component`}>
                {this.children}
            </div>
        );

        DataAttributes.setDataColor(element, this.props.Color || Color.Unknown);
        return element;
    }

    public setColor(color: Color): void {
        this.props.Color = color;
        DataAttributes.setDataColor(this.element!, color);
    }

    public setContent(content: string|FrameworkElement): void {
        this.children = [content];
        DOM.replaceChildren(this.element!, ...this.children as string[]|FrameworkElement[]);
    }
}