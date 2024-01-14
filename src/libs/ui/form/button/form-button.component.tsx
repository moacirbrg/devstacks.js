import "@styles/components/form/form-button.vars.scss";
import "./form-button.component.scss";
import { FrameworkElement } from '@libs/core/framework-element';
import { Component } from '@libs/core/component';
import { ComponentProps } from '@libs/core/component-props';
import { Color } from "@libs/ui/enums/color.enum";
import { DOM } from '@libs/core/dom';
import { Styles } from '@libs/ui/styles';
import { Size } from '@libs/ui/enums/size.enum';

export interface FormButtonProps extends ComponentProps {
    Color?: Color;
    Size?: Size;
}

export class FormButton extends Component<FormButtonProps> {
    public render(): FrameworkElement {
        const element: FrameworkElement = (
            <button class="form-button-component">
                {this.children}
            </button>
        );

        Styles.setDataColor(element, this.props.Color || Color.Unknown);
        Styles.setDataSize(element, this.props.Size || Size.Medium);
        return element;
    }

    public setColor(color: Color): void {
        this.props.Color = color;
        Styles.setDataColor(this.element!, color);
    }

    public setSize(size: Size): void {
        this.props.Size = size;
        Styles.setDataSize(this.element!, size);
    }

    public setContent(content: string|FrameworkElement): void {
        this.children = [content];
        DOM.replaceChildren(this.element!, ...this.children as string[]|FrameworkElement[]);
    }
}