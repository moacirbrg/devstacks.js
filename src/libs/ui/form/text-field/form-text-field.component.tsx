import "./form-text-field.component.scss";
import { FrameworkElement } from '@libs/core/framework-element';
import { Component } from '@libs/core/component';
import { ComponentProps } from '@libs/core/component-props';
import { DOM } from '@libs/core/dom';
import { FormTextFieldType } from '@libs/ui/form/text-field/form-text-field-type.enum';

export interface FormTextFieldProps extends ComponentProps {
    Label?: string;
    Placeholder?: string;
    Type?: FormTextFieldType;
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
        }

        const type: string = this.props.Type || "text";

        const input: FrameworkElement = (
            <input class="form-text-field-input" type={type} value={this.props.Value} placeholder={this.props.Placeholder} />
        );

        DOM.appendChild(element, input);

        return element;
    }
}