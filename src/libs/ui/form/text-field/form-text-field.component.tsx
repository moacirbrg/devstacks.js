import "./form-button.component.scss";
import { FrameworkElement } from '@libs/core/framework-element';
import { Component } from '@libs/core/component';
import { ComponentProps } from '@libs/core/component-props';
import { FontFamily } from '@libs/ui/enums/font-family.enum';
import { FontWeight } from '@libs/ui/enums/font-weight.enum';
import { DOM } from '@libs/core/dom';
import { Styles } from '@libs/ui/styles';
import { FormTextFieldGlobals } from '@libs/ui/form/text-field/form-text-field.globals';
import { FontSize } from '@libs/ui/enums/font-content-size.enum';

export interface FormTextFieldProps extends ComponentProps {
    InputFontFamily?: FontFamily;
    InputFontSize?: FontSize;
    InputFontWeight?: FontWeight;
    LabelFontFamily?: FontFamily;
    LabelFontSize?: FontSize;
    LabelFontWeight?: FontWeight;

    Label?: string;
    Placeholder?: string;
    Type?: string;
    Value?: string;
}

export class FormTextField extends Component<FormTextFieldProps> {
    public render(): FrameworkElement {
        const element: FrameworkElement = (
            <div class="form-text-field-component"></div>
        );

        if (this.props.Label) {
            const label: FrameworkElement = (
                <label class="form-text-field-label">{this.props.Label}</label>
            );

            DOM.appendChild(element, label);
            Styles.setFontFamily(label, this.props.LabelFontFamily || FormTextFieldGlobals.LabelFontFamily);
            Styles.setFontSize(label, this.props.LabelFontSize || FormTextFieldGlobals.LabelFontSize);
            Styles.setFontWeight(label, this.props.LabelFontWeight || FormTextFieldGlobals.LabelFontWeight);
        }

        const type: string = this.props.Type || "text";

        const input: FrameworkElement = (
            <input class="form-text-field-input" type={type} value={this.props.Value} placeholder={this.props.Placeholder} />
        );

        DOM.appendChild(element, input);
        Styles.setFontFamily(input, this.props.InputFontFamily || FormTextFieldGlobals.InputFontFamily);
        Styles.setFontSize(input, this.props.InputFontSize || FormTextFieldGlobals.InputFontSize);
        Styles.setFontWeight(input, this.props.InputFontWeight || FormTextFieldGlobals.InputFontWeight);

        return element;
    }
}