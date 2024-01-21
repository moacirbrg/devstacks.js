import { FrameworkElement } from '@libs/core/framework-element';
import { Component } from '@libs/core/component';
import { DOM } from '@libs/core/dom';
import { FormTextField } from '@libs/ui/form/text-field/form-text-field.component';
import { StringState } from '@libs/state/string-state';
import { Subscription } from '@libs/reactive/subscription';
import { FormButton } from '@libs/ui/form/button/form-button.component';
import { Color } from '@libs/ui/enums/color.enum';
import { TypoMessage } from '@libs/ui/typo/message/typo-message.component';
import { ElementRef } from '@libs/core/element-ref';

export class SampleFormTextFieldController extends Component {
    private _email: StringState = new StringState('me@localhost');
    private _onEmailChange$: Subscription|null = null;
    private _messageRef: ElementRef = Component.createRef();

    public render(): FrameworkElement {
        return (
            <div class="sample-form-text-field-controller">
                <FormTextField Value={this._email} Label="Email Address" Placeholder="you@example.com" />
                <FormButton Color={Color.Primary} onclick={this.setRandomEmail.bind(this)}>Random email</FormButton>
                <TypoMessage Color={Color.Neutral} ref={this._messageRef}>Current email: {this._email.value}</TypoMessage>
            </div>
        );
    }

    public onRendered() {
        this._onEmailChange$ = this._email.asObservable().subscribe((value: string) => {
            this._messageRef.getComponent<TypoMessage>()?.setContent(`Current email: ${value}`);
        });
    }

    public onDestroy() {
        this._onEmailChange$?.unsubscribe();
    }

    private setRandomEmail() {
        this._email.value = `${Math.random().toString()}@example.com`;
    }
}