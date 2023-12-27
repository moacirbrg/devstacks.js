import "./form-button.component.scss";
import { FrameworkElement } from '@libs/core/framework-element';
import { Component } from '@libs/core/component';
import { ComponentProps } from '@libs/core/component-props';
import { Color } from "@libs/ui/enums/color.enum";
import { FontFamily } from '@libs/ui/enums/font-family.enum';
import { FontWeight } from '@libs/ui/enums/font-weight.enum';
import { DOM } from '@libs/core/dom';
import { Styles } from '@libs/ui/styles';
import { FormButtonGlobals } from '@libs/ui/form/button/form-button.globals';
import { FontSize } from '@libs/ui/enums/font-content-size.enum';

export interface FormButtonProps extends ComponentProps {
    Color?: Color;
    FontFamily?: FontFamily;
    FontSize?: FontSize;
    FontWeight?: FontWeight;
}

export class FormButton extends Component<FormButtonProps> {
    public render(): FrameworkElement {
        const element: FrameworkElement = (
            <button class="form-button-component">
                {this.children}
            </button>
        );

        Styles.setDataColor(element, this.props.Color || FormButtonGlobals.Color);
        Styles.setFontFamily(element, this.props.FontFamily || FormButtonGlobals.FontFamily);
        Styles.setFontSize(element, this.props.FontSize || FormButtonGlobals.FontSize);
        Styles.setFontWeight(element, this.props.FontWeight || FormButtonGlobals.FontWeight);

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