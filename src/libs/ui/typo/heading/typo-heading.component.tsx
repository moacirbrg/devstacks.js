import "@styles/components/typo/typo-heading.vars.scss";
import "./typo-heading.component.scss";
import { FrameworkElement } from "@libs/core/framework-element";
import { Component } from "@libs/core/component";
import { ComponentProps } from "@libs/core/component-props";
import { DOM } from '@libs/core/dom';
import { DataAttributes } from '@libs/ui/data-attributes';
import { TypoHeadingType } from '@libs/ui/typo/heading/typo-heading-type';
import { Color } from "@libs/ui/enums/color.enum";

export interface TypoHeadingProps extends ComponentProps {
    Color?: Color;
    Type: TypoHeadingType;
}

export class TypoHeading extends Component<TypoHeadingProps> {
    public render(): FrameworkElement {
        const element: FrameworkElement = (
            <div class={`typo-heading-component ${this.props.Type}`}>
                {this.children}
            </div>
        );

        DataAttributes.setDataColor(element, this.props.Color || Color.Unknown);
        this._setType(element, this.props.Type);

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

    public setType(size: TypoHeadingType): void {
        this.props.Type = size;
        this._setType(this.element!, size);
    }

    private _setType(element: FrameworkElement, type: TypoHeadingType): void {
        DOM.setAttribute(element, 'data-type', type);
    }
}