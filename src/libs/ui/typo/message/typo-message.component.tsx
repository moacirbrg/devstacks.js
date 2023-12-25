import "./typo-message.component.scss";
import { Color } from "@libs/ui/enums/color.enum";
import { FrameworkElement } from "@libs/core/framework-element";
import { Component } from "@libs/core/component";
import { ComponentProps } from "@libs/core/component-props";
import { DOM } from '@libs/core/dom';
import { FontFamily } from '@libs/ui/enums/font-family.enum';
import { FontWeight } from '@libs/ui/enums/font-weight.enum';
import { TypoMessageGlobals } from '@libs/ui/typo/message/typo-message.globals';

export interface TypoMessageProps extends ComponentProps {
    Color: Color;
    FontFamily?: FontFamily;
    FontWeight?: FontWeight;
}

export class TypoMessage extends Component<TypoMessageProps> {
    public render(): FrameworkElement {
        const element = (
            <div class={`typo-message-component ${this.props.Color}`}>
                {this.children}
            </div>
        );

        this._setColor(this.props.Color, element);
        this._setFontFamily(this.props.FontFamily || TypoMessageGlobals.FontFamily, element);
        this._setFontWeight(this.props.FontWeight || TypoMessageGlobals.Weight, element);

        return element;
    }

    public _setColor(color: Color, element: FrameworkElement): void {
        this.props.Color = color;
        DOM.setAttribute(element, 'class', `typo-message-component ${this.props.Color}`);
    }

    public setColor(color: Color): void {
        this._setColor(color, this.element!);
    }

    private _setFontFamily(fontFamily: FontFamily, element: FrameworkElement): void {
        this.props.FontFamily = fontFamily;
        DOM.setStyle(element, 'font-family', `var(${fontFamily})`);
    }

    public setFontFamily(fontFamily: FontFamily): void {
        this._setFontFamily(fontFamily, this.element!);
    }

    private _setFontWeight(fontWeight: FontWeight, element: FrameworkElement): void {
        this.props.FontWeight = fontWeight;
        DOM.setStyle(element, 'font-weight', `var(${fontWeight})`);
    }

    public setFontWeight(fontWeight: FontWeight): void {
        this._setFontWeight(fontWeight, this.element!);
    }

    public setContent(content: string|FrameworkElement): void {
        this.children = [content];
        DOM.replaceChildren(this.element!, ...this.children as string[]|FrameworkElement[]);
    }
}