import "./typo-heading.component.scss";
import { FrameworkElement } from "@libs/core/framework-element";
import { Component } from "@libs/core/component";
import { ComponentProps } from "@libs/core/component-props";
import { DOM } from '@libs/core/dom';
import { TypoHeadingGlobals } from '@libs/ui/typo/heading/typo-heading.globals';
import { FontWeight } from '@libs/ui/enums/font-weight.enum';
import { FontFamily } from '@libs/ui/enums/font-family.enum';
import { Styles } from '@libs/ui/styles';
import { TypoHeadingType } from '@libs/ui/typo/heading/typo-heading-type';
import { Color } from "@libs/ui/enums/color.enum";

export interface TypoHeadingProps extends ComponentProps {
    Type: TypoHeadingType;

    Color?: Color;
    FontWeight?: FontWeight;
    FontFamily?: FontFamily;
}

export class TypoHeading extends Component<TypoHeadingProps> {
    public render(): FrameworkElement {
        const element: FrameworkElement = (
            <div class={`typo-heading-component ${this.props.Type}`}>
                {this.children}
            </div>
        );

        Styles.setDataColor(element, this.props.Color || TypoHeadingGlobals.Color);
        Styles.setFontWeight(element, this.props.FontWeight || TypoHeadingGlobals.getWeight(this.props.Type));
        this._setType(element, this.props.Type);
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

    private _setType(element: FrameworkElement, type: TypoHeadingType): void {
        DOM.setAttribute(element, 'data-type', type);
    }

    public setType(size: TypoHeadingType): void {
        this.props.Type = size;
        this._setType(this.element!, size);
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