import "./typo-message.component.scss";
import { Color } from "@libs/ui/enums/color.enum";
import { FrameworkElement } from "@libs/core/framework-element";
import { Component } from "@libs/core/component";
import { ComponentProps } from "@libs/core/component-props";
import { DOM } from '@libs/core/dom';
import { FontFamily } from '@libs/ui/enums/font-family.enum';
import { FontWeight } from '@libs/ui/enums/font-weight.enum';
import { TypoMessageGlobals } from '@libs/ui/typo/message/typo-message.globals';
import { Styles } from '@libs/ui/styles';
import { FontSize } from '@libs/ui/enums/font-content-size.enum';

export interface TypoMessageProps extends ComponentProps {
    Color?: Color;
    FontFamily?: FontFamily;
    FontSize?: FontSize;
    FontWeight?: FontWeight;
}

export class TypoMessage extends Component<TypoMessageProps> {
    public render(): FrameworkElement {
        const element = (
            <div class={`typo-message-component`}>
                {this.children}
            </div>
        );

        Styles.setDataColor(element, this.props.Color || TypoMessageGlobals.Color);
        Styles.setFontFamily(element, this.props.FontFamily || TypoMessageGlobals.FontFamily);
        Styles.setFontSize(element, this.props.FontSize || TypoMessageGlobals.FontSize);
        Styles.setFontWeight(element, this.props.FontWeight || TypoMessageGlobals.FontWeight);

        return element;
    }

    public setColor(color: Color): void {
        this.props.Color = color;
        Styles.setDataColor(this.element!, color);
    }

    public setFontFamily(fontFamily: FontFamily): void {
        this.props.FontFamily = fontFamily;
        Styles.setFontFamily(this.element!, fontFamily);
    }

    public setFontSize(fontSize: FontSize): void {
        this.props.FontSize = fontSize;
        Styles.setFontSize(this.element!, fontSize);
    }

    public setFontWeight(fontWeight: FontWeight): void {
        this.props.FontWeight = fontWeight;
        Styles.setFontWeight(this.element!, fontWeight);
    }

    public setContent(content: string|FrameworkElement): void {
        this.children = [content];
        DOM.replaceChildren(this.element!, ...this.children as string[]|FrameworkElement[]);
    }
}