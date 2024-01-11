import { FrameworkElement } from '@libs/core/framework-element';
import { Component } from '@libs/core/component';
import { DOM } from '@libs/core/dom';
import { FormButton } from '@libs/ui/form/button/form-button.component';
import { Color } from '@libs/ui/enums/color.enum';
import { TypoHeading } from '@libs/ui/typo/heading/typo-heading.component';
import { TypoHeadingType } from '@libs/ui/typo/heading/typo-heading-type';
import { FontFamily } from '@libs/ui/enums/font-family.enum';
import { FontSize } from '@libs/ui/enums/font-content-size.enum';
import { FontWeight } from '@libs/ui/enums/font-weight.enum';

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
                <FormButton Color={Color.Primary} FontFamily={FontFamily.SansSerif}>Sans-Serif</FormButton>&nbsp;
                <FormButton Color={Color.Primary} FontFamily={FontFamily.Serif}>Serif</FormButton>&nbsp;
                <FormButton Color={Color.Primary} FontFamily={FontFamily.Monospace}>Monospace</FormButton>&nbsp;

                <TypoHeading Type={TypoHeadingType.H2}>Font Size</TypoHeading>
                <FormButton Color={Color.Primary} FontSize={FontSize.ExtraSmall}>Extra Small</FormButton>&nbsp;
                <FormButton Color={Color.Primary} FontSize={FontSize.Small}>Small</FormButton>&nbsp;
                <FormButton Color={Color.Primary} FontSize={FontSize.Medium}>Default</FormButton>&nbsp;
                <FormButton Color={Color.Primary} FontSize={FontSize.Large}>Large</FormButton>&nbsp;
                <FormButton Color={Color.Primary} FontSize={FontSize.ExtraLarge}>Extra Large</FormButton>&nbsp;

                <TypoHeading Type={TypoHeadingType.H2}>Font Weight</TypoHeading>
                <FormButton Color={Color.Primary} FontWeight={FontWeight.Light}>Light</FormButton>&nbsp;
                <FormButton Color={Color.Primary} FontWeight={FontWeight.Regular}>Regular</FormButton>&nbsp;
                <FormButton Color={Color.Primary} FontWeight={FontWeight.Bold}>Bold</FormButton>&nbsp;
            </div>
        );
    }
}