import "@styles/components/form/form-text-field.vars.scss";
import "./form-text-field.component.scss";
import { FrameworkElement } from '@libs/core/framework-element';
import { Component } from '@libs/core/component';
import { ComponentProps } from '@libs/core/component-props';
import { DOM } from '@libs/core/dom';
import { FormTextFieldType } from '@libs/ui/form/text-field/form-text-field-type.enum';
import { ElementRef } from '@libs/core/element-ref';

export interface FormTextFieldProps extends ComponentProps {
    Label?: string;
    Placeholder?: string;
    Type?: FormTextFieldType;
    Value?: string;
}

export class FormTextField extends Component<FormTextFieldProps> {
    private _inputRef: ElementRef<HTMLInputElement> = Component.createRef();

    public render(): FrameworkElement {
        const type: string = this.props.Type || 'text';

        const label: FrameworkElement|null = this.props.Label
            ? (<label>{this.props.Label}</label>)
            : null;

        const element: FrameworkElement = (
            <div class="form-text-field-component">
                {label}
                <input ref={this._inputRef} type={type} value={this.props.Value || ''} placeholder={this.props.Placeholder} />
            </div>
        );

        this._inputRef.current?.addEventListener('focus', () => {
            DOM.setAttribute(this.element!, 'data-focus', 'true');
        });

        this._inputRef.current?.addEventListener('blur', () => {
            DOM.setAttribute(this.element!, 'data-focus', 'false');
        });

        return element;
    }

    public focus(): void {
        this.setFocusState();
        this._inputRef.current?.focus();
    }

    public blur(): void {
        this.setFocusState();
        this._inputRef.current?.blur();
    }

    public isFocused(): boolean {
        return DOM.getAttribute(this.element!, 'data-focus') === 'true';
    }

    private setFocusState(): void {
        DOM.setAttribute(this.element!, 'data-focus', 'false');
    }
}