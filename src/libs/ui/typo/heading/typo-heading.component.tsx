import { FrameworkElement } from "@libs/core/framework-element";
import { Component } from "@libs/core/component";
import { ComponentProps } from "@libs/core/component-props";
import { DOM } from '@libs/core/dom';
import { TypoHeadingGlobals } from '@libs/ui/typo/heading/typo-heading.globals';
import { FontWeight } from '@libs/ui/enums/font-weight.enum';
import { FontFamily } from '@libs/ui/enums/font-family.enum';
import { Styles } from '@libs/ui/styles';
import { FontHeadSize } from '@libs/ui/enums/font-head-size';

export interface TypoHeadingProps extends ComponentProps {
    Size: FontHeadSize;
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

        Styles.setFontWeight(element, this.props.Weight || TypoHeadingGlobals.getWeight(this.props.Size));
        Styles.setFontSize(element, this.props.Size);
        Styles.setFontFamily(element, this.props.FontFamily || TypoHeadingGlobals.FontFamily);

        return element;
    }

    public setFontFamily(fontFamily: FontFamily): void {
        this.props.FontFamily = fontFamily;
        Styles.setFontFamily(this.element!, fontFamily);
    }

    public setSize(size: FontHeadSize): void {
        this.props.Size = size;
        Styles.setFontSize(this.element!, size);
    }

    public setWeight(weight: FontWeight): void {
        this.props.Weight = weight;
        Styles.setFontWeight(this.element!, weight);
    }

    public setContent(content: string|FrameworkElement): void {
        this.children = [content];
        DOM.replaceChildren(this.element!, ...this.children as string[]|FrameworkElement[]);
    }
}