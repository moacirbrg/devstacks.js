import { FrameworkElement } from '@libs/core/framework-element';
import { Component } from '@libs/core/component';
import { DOM } from '@libs/core/dom';
import { TypoHeading } from '@libs/ui/typo/heading/typo-heading.component';
import { TypoHeadingType } from '@libs/ui/typo/heading/typo-heading-type';
import { Color } from '@libs/ui/enums/color.enum';

export class SampleTypoHeadingController extends Component {
    public render(): FrameworkElement {
        return (
            <div class="sample-typo-heading-controller">
                <TypoHeading Type={TypoHeadingType.H1}>My Title H1 - Unknown Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H2}>My Title H2 - Unknown Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H3}>My Title H3 - Unknown Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H4}>My Title H4 - Unknown Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H5}>My Title H5 - Unknown Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H6}>My Title H6 - Unknown Color</TypoHeading>
                <hr/>

                <TypoHeading Type={TypoHeadingType.H1} Color={Color.Primary}>My Title H1 - Primary Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H2} Color={Color.Primary}>My Title H2 - Primary Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H3} Color={Color.Primary}>My Title H3 - Primary Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H4} Color={Color.Primary}>My Title H4 - Primary Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H5} Color={Color.Primary}>My Title H5 - Primary Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H6} Color={Color.Primary}>My Title H6 - Primary Color</TypoHeading>
                <hr/>

                <TypoHeading Type={TypoHeadingType.H1} Color={Color.Secondary}>My Title H1 - Secondary Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H2} Color={Color.Secondary}>My Title H2 - Secondary Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H3} Color={Color.Secondary}>My Title H3 - Secondary Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H4} Color={Color.Secondary}>My Title H4 - Secondary Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H5} Color={Color.Secondary}>My Title H5 - Secondary Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H6} Color={Color.Secondary}>My Title H6 - Secondary Color</TypoHeading>
                <hr/>

                <TypoHeading Type={TypoHeadingType.H1} Color={Color.Success}>My Title H1 - Success Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H2} Color={Color.Success}>My Title H2 - Success Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H3} Color={Color.Success}>My Title H3 - Success Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H4} Color={Color.Success}>My Title H4 - Success Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H5} Color={Color.Success}>My Title H5 - Success Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H6} Color={Color.Success}>My Title H6 - Success Color</TypoHeading>
                <hr/>

                <TypoHeading Type={TypoHeadingType.H1} Color={Color.Danger}>My Title H1 - Danger Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H2} Color={Color.Danger}>My Title H2 - Danger Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H3} Color={Color.Danger}>My Title H3 - Danger Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H4} Color={Color.Danger}>My Title H4 - Danger Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H5} Color={Color.Danger}>My Title H5 - Danger Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H6} Color={Color.Danger}>My Title H6 - Danger Color</TypoHeading>
                <hr/>

                <TypoHeading Type={TypoHeadingType.H1} Color={Color.Warning}>My Title H1 - Warning Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H2} Color={Color.Warning}>My Title H2 - Warning Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H3} Color={Color.Warning}>My Title H3 - Warning Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H4} Color={Color.Warning}>My Title H4 - Warning Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H5} Color={Color.Warning}>My Title H5 - Warning Color</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H6} Color={Color.Warning}>My Title H6 - Warning Color</TypoHeading>
                <hr/>
            </div>
        );
    }
}