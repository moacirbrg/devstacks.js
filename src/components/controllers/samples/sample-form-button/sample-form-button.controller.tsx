import { FrameworkElement } from '@libs/core/framework-element';
import { Component } from '@libs/core/component';
import { DOM } from '@libs/core/dom';
import { FormButton } from '@libs/ui/form/button/form-button.component';
import { Color } from '@libs/ui/enums/color.enum';
import { Size } from '@libs/ui/enums/size.enum';
import { TypoHeading } from '@libs/ui/typo/heading/typo-heading.component';
import { TypoHeadingType } from '@libs/ui/typo/heading/typo-heading-type';

export class SampleFormButtonController extends Component {
    public render(): FrameworkElement {
        return (
            <div class="sample-form-button-controller">
                <TypoHeading Type={TypoHeadingType.H2}>Color</TypoHeading>
                <FormButton Color={Color.Unknown}>Unknown Button Color</FormButton>&nbsp;
                <FormButton Color={Color.Primary}>Primary Button Color</FormButton>&nbsp;
                <FormButton Color={Color.Secondary}>Secondary Button Color</FormButton>&nbsp;
                <FormButton Color={Color.Danger}>Danger Button Color</FormButton>&nbsp;
                <FormButton Color={Color.Info}>Info Button Color</FormButton>&nbsp;
                <FormButton Color={Color.Success}>Success Button Color</FormButton>&nbsp;
                <FormButton Color={Color.Warning}>Warning Button Color</FormButton>

                <TypoHeading Type={TypoHeadingType.H2}>Sizes</TypoHeading>
                <FormButton Color={Color.Primary} Size={Size.Small}>SMALL</FormButton>&nbsp;
                <FormButton Color={Color.Primary} Size={Size.Medium}>MEDIUM</FormButton>&nbsp;
                <FormButton Color={Color.Primary} Size={Size.Large}>LARGE</FormButton>&nbsp;
            </div>
        );
    }
}