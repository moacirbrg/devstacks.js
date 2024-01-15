import { FrameworkElement } from '@libs/core/framework-element';
import { Component } from '@libs/core/component';
import { DOM } from '@libs/core/dom';
import { FormTextField } from '@libs/ui/form/text-field/form-text-field.component';

export class SampleFormTextFieldController extends Component {
    public render(): FrameworkElement {
        return (
            <div class="sample-form-text-field-controller">
                <FormTextField Label="Label" Placeholder="Placeholder" />
            </div>
        );
    }
}