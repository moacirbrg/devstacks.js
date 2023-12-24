import { FrameworkElement } from "@libs/core/framework-element";
import { Component } from "@libs/core/component";
import { ComponentProps } from "@libs/core/component-props";
import { DOM } from '@libs/core/dom';
import { TypoHeadingSize } from '@libs/ui/typo/heading/typo-heading-size.enum';
import { TypoHeadingGlobals } from '@libs/ui/typo/heading/typo-heading.globals';
import { FontWeight } from '@libs/ui/enums/font-weight.enum';
import { FontFamily } from '@libs/ui/enums/font-family.enum';

export interface TypoHeadingProps extends ComponentProps {
    Size: TypoHeadingSize;
    Weight?: FontWeight;
    FontFamily?: FontFamily;
}

export class TypoHeading extends Component<TypoHeadingProps> {
    public render(): FrameworkElement {
        const element: FrameworkElement = (
            <div class={`typo-heading-component ${this.props.Size}`}>
                {this.children}
            </div>
        );

        this._setWeight(this.props.Weight || TypoHeadingGlobals.getWeight(this.props.Size), element);
        this._setSize(this.props.Size, element);
        this._setFontFamily(this.props.FontFamily || TypoHeadingGlobals.FontFamily, element);

        return element;
    }

    private _setFontFamily(fontFamily: FontFamily, element: FrameworkElement): void {
        this.props.FontFamily = fontFamily;
        DOM.setStyle(element, 'font-family', `var(${fontFamily})`);
    }

    public setFontFamily(fontFamily: FontFamily): void {
        this._setFontFamily(fontFamily, this.element!);
    }

    private _setSize(size: TypoHeadingSize, element: FrameworkElement): void {
        this.props.Size = size;
        DOM.setStyle(element, 'font-size', `var(${size})`);
    }

    public setSize(size: TypoHeadingSize): void {
        this._setSize(size, this.element!);
    }

    private _setWeight(weight: FontWeight, element: FrameworkElement): void {
        this.props.Weight = weight;
        DOM.setStyle(element, 'font-weight', `var(${weight})`);
    }

    public setWeight(weight: FontWeight): void {
        this._setWeight(weight, this.element!);
    }

    public setContent(content: string|FrameworkElement): void {
        this.children = [content];
        DOM.replaceChildren(this.element!, ...this.children as string[]|FrameworkElement[]);
    }
}