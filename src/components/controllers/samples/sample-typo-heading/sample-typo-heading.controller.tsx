import { FrameworkElement } from '@libs/core/framework-element';
import { Component } from '@libs/core/component';
import { DOM } from '@libs/core/dom';
import { TypoHeading } from '@libs/ui/typo/heading/typo-heading.component';
import { TypoHeadingType } from '@libs/ui/typo/heading/typo-heading-type.enum';
import { Color } from '@libs/ui/enums/color.enum';

export class SampleTypoHeadingController extends Component {
    public render(): FrameworkElement {
        return (
            <div class="sample-typo-heading-controller">
                <TypoHeading Type={TypoHeadingType.H1}>H1 DevStacks title</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H2}>H2 DevStacks title</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H3}>H3 DevStacks title</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H4}>H4 DevStacks title</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H5}>H5 DevStacks title</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H6}>H6 DevStacks title</TypoHeading>
            </div>
        );
    }
}