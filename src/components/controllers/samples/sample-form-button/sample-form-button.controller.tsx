import { FrameworkElement } from '@libs/core/framework-element';
import { Component } from '@libs/core/component';
import { DOM } from '@libs/core/dom';
import { FormButton } from '@libs/ui/form/button/form-button.component';
import { Color } from '@libs/ui/enums/color.enum';
import { Size } from '@libs/ui/enums/size.enum';
import { TypoHeading } from '@libs/ui/typo/heading/typo-heading.component';
import { TypoHeadingType } from '@libs/ui/typo/heading/typo-heading-type.enum';

export class SampleFormButtonController extends Component {
    public render(): FrameworkElement {
        return (
            <div class="sample-form-button-controller">
                <TypoHeading Type={TypoHeadingType.H2}>Color</TypoHeading>
                <FormButton Color={Color.Unknown}>Sign up</FormButton>&nbsp;
                <FormButton Color={Color.Neutral}>Sign up</FormButton>&nbsp;
                <FormButton Color={Color.Primary}>Sign up</FormButton>&nbsp;
                <FormButton Color={Color.Secondary}>Sign up</FormButton>&nbsp;
                <FormButton Color={Color.Danger}>Sign up</FormButton>&nbsp;
                <FormButton Color={Color.Info}>Sign up</FormButton>&nbsp;
                <FormButton Color={Color.Success}>Sign up</FormButton>&nbsp;
                <FormButton Color={Color.Warning}>Sign up</FormButton>

                <TypoHeading Type={TypoHeadingType.H2}>Sizes</TypoHeading>
                <FormButton Color={Color.Primary} Size={Size.Small}>Sign up</FormButton>&nbsp;
                <FormButton Color={Color.Primary} Size={Size.Medium}>Sign up</FormButton>&nbsp;
                <FormButton Color={Color.Primary} Size={Size.Large}>Sign up</FormButton>&nbsp;
            </div>
        );
    }
}