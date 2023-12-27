import { FrameworkElement } from '@libs/core/framework-element';
import { Component } from '@libs/core/component';
import { DOM } from '@libs/core/dom';
import { FormButton } from '@libs/ui/form/button/form-button.component';
import { Color } from '@libs/ui/enums/color.enum';
import { TypoHeading } from '@libs/ui/typo/heading/typo-heading.component';
import { TypoHeadingType } from '@libs/ui/typo/heading/typo-heading-type';
import { FontFamily } from '@libs/ui/enums/font-family.enum';

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

                <TypoHeading Type={TypoHeadingType.H2}>Font Family</TypoHeading>
                <FormButton Color={Color.Unknown} FontFamily={FontFamily.SansSerif}>Sans Serif Font Family</FormButton>&nbsp;
                <FormButton Color={Color.Unknown} FontFamily={FontFamily.Serif}>Serif Font Family</FormButton>&nbsp;
                <FormButton Color={Color.Unknown} FontFamily={FontFamily.Monospace}>Monospace Font Family</FormButton>&nbsp;
                <br/>
                <FormButton Color={Color.Primary} FontFamily={FontFamily.SansSerif}>Sans Serif Font Family</FormButton>&nbsp;
                <FormButton Color={Color.Primary} FontFamily={FontFamily.Serif}>Serif Font Family</FormButton>&nbsp;
                <FormButton Color={Color.Primary} FontFamily={FontFamily.Monospace}>Monospace Font Family</FormButton>&nbsp;
                <br/>
                <FormButton Color={Color.Secondary} FontFamily={FontFamily.SansSerif}>Sans Serif Font Family</FormButton>&nbsp;
                <FormButton Color={Color.Secondary} FontFamily={FontFamily.Serif}>Serif Font Family</FormButton>&nbsp;
                <FormButton Color={Color.Secondary} FontFamily={FontFamily.Monospace}>Monospace Font Family</FormButton>&nbsp;
                <br/>
                <FormButton Color={Color.Danger} FontFamily={FontFamily.SansSerif}>Sans Serif Font Family</FormButton>&nbsp;
                <FormButton Color={Color.Danger} FontFamily={FontFamily.Serif}>Serif Font Family</FormButton>&nbsp;
                <FormButton Color={Color.Danger} FontFamily={FontFamily.Monospace}>Monospace Font Family</FormButton>&nbsp;
                <br/>
                <FormButton Color={Color.Info} FontFamily={FontFamily.SansSerif}>Sans Serif Font Family</FormButton>&nbsp;
                <FormButton Color={Color.Info} FontFamily={FontFamily.Serif}>Serif Font Family</FormButton>&nbsp;
                <FormButton Color={Color.Info} FontFamily={FontFamily.Monospace}>Monospace Font Family</FormButton>&nbsp;
                <br/>
                <FormButton Color={Color.Success} FontFamily={FontFamily.SansSerif}>Sans Serif Font Family</FormButton>&nbsp;
                <FormButton Color={Color.Success} FontFamily={FontFamily.Serif}>Serif Font Family</FormButton>&nbsp;
                <FormButton Color={Color.Success} FontFamily={FontFamily.Monospace}>Monospace Font Family</FormButton>&nbsp;
                <br/>
                <FormButton Color={Color.Warning} FontFamily={FontFamily.SansSerif}>Sans Serif Font Family</FormButton>&nbsp;
                <FormButton Color={Color.Warning} FontFamily={FontFamily.Serif}>Serif Font Family</FormButton>&nbsp;
                <FormButton Color={Color.Warning} FontFamily={FontFamily.Monospace}>Monospace Font Family</FormButton>&nbsp;
            </div>
        );
    }
}