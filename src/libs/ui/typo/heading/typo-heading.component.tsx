import "./typo-heading.component.scss";
import { FrameworkElement } from "@libs/core/framework-element";
import { Component } from "@libs/core/component";
import { ComponentProps } from "@libs/core/component-props";
import { DOM } from '@libs/core/dom';
import { TypoHeadingGlobals } from '@libs/ui/typo/heading/typo-heading.globals';
import { FontWeight } from '@libs/ui/enums/font-weight.enum';
import { FontFamily } from '@libs/ui/enums/font-family.enum';
import { Styles } from '@libs/ui/styles';
import { FontHeadSize } from '@libs/ui/enums/font-head-size';
import { Color } from "@libs/ui/enums/color.enum";

export interface TypoHeadingProps extends ComponentProps {
    FontSize: FontHeadSize;

    Color?: Color;
    FontWeight?: FontWeight;
    FontFamily?: FontFamily;
}

export class TypoHeading extends Component<TypoHeadingProps> {
    public render(): FrameworkElement {
        const element: FrameworkElement = (
            <div class={`typo-heading-component ${this.props.FontSize}`}>
                {this.children}
            </div>
        );

        Styles.setDataColor(element, this.props.Color || TypoHeadingGlobals.Color);
        Styles.setFontWeight(element, this.props.FontWeight || TypoHeadingGlobals.getWeight(this.props.FontSize));
        Styles.setFontSize(element, this.props.FontSize);
        Styles.setFontFamily(element, this.props.FontFamily || TypoHeadingGlobals.FontFamily);

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

    public setFontSize(size: FontHeadSize): void {
        this.props.FontSize = size;
        Styles.setFontSize(this.element!, size);
    }

    public setFontWeight(weight: FontWeight): void {
        this.props.FontWeight = weight;
        Styles.setFontWeight(this.element!, weight);
    }

    public setContent(content: string|FrameworkElement): void {
        this.children = [content];
        DOM.replaceChildren(this.element!, ...this.children as string[]|FrameworkElement[]);
    }
}