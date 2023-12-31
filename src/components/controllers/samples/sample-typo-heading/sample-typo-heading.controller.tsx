import { FrameworkElement } from '@libs/core/framework-element';
import { Component } from '@libs/core/component';
import { DOM } from '@libs/core/dom';
import { TypoHeading } from '@libs/ui/typo/heading/typo-heading.component';
import { FontWeight } from '@libs/ui/enums/font-weight.enum';
import { FontFamily } from '@libs/ui/enums/font-family.enum';
import { TypoHeadingType } from '@libs/ui/typo/heading/typo-heading-type';
import { Color } from '@libs/ui/enums/color.enum';

export class SampleTypoHeadingController extends Component {
    public render(): FrameworkElement {
        return (
            <div class="sample-typo-heading-controller">
                <TypoHeading Type={TypoHeadingType.H1} FontWeight={FontWeight.Light}> My Title H1 Sans-Serif Light</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H2} FontWeight={FontWeight.Light}> My Title H2 Sans-Serif Light</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H3} FontWeight={FontWeight.Light}> My Title H3 Sans-Serif Light</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H4} FontWeight={FontWeight.Light}> My Title H4 Sans-Serif Light</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H5} FontWeight={FontWeight.Light}> My Title H5 Sans-Serif Light</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H6} FontWeight={FontWeight.Light}> My Title H6 Sans-Serif Light</TypoHeading>

                <hr/>

                <TypoHeading Type={TypoHeadingType.H1} FontWeight={FontWeight.Regular}> My Title H1 Sans-Serif Regular</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H2} FontWeight={FontWeight.Regular}> My Title H2 Sans-Serif Regular</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H3} FontWeight={FontWeight.Regular}> My Title H3 Sans-Serif Regular</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H4} FontWeight={FontWeight.Regular}> My Title H4 Sans-Serif Regular</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H5} FontWeight={FontWeight.Regular}> My Title H5 Sans-Serif Regular</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H6} FontWeight={FontWeight.Regular}> My Title H6 Sans-Serif Regular</TypoHeading>

                <hr/>

                <TypoHeading Type={TypoHeadingType.H1}> My Title H1 Sans-Serif Bold</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H2}> My Title H2 Sans-Serif Bold</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H3}> My Title H3 Sans-Serif Bold</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H4}> My Title H4 Sans-Serif Bold</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H5}> My Title H5 Sans-Serif Bold</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H6}> My Title H6 Sans-Serif Bold</TypoHeading>

                <hr/>

                <TypoHeading Type={TypoHeadingType.H1} FontWeight={FontWeight.Light} FontFamily={FontFamily.Serif}> My Title H1 Serif Light</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H2} FontWeight={FontWeight.Light} FontFamily={FontFamily.Serif}> My Title H2 Serif Light</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H3} FontWeight={FontWeight.Light} FontFamily={FontFamily.Serif}> My Title H3 Serif Light</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H4} FontWeight={FontWeight.Light} FontFamily={FontFamily.Serif}> My Title H4 Serif Light</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H5} FontWeight={FontWeight.Light} FontFamily={FontFamily.Serif}> My Title H5 Serif Light</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H6} FontWeight={FontWeight.Light} FontFamily={FontFamily.Serif}> My Title H6 Serif Light</TypoHeading>

                <hr/>

                <TypoHeading Type={TypoHeadingType.H1} FontWeight={FontWeight.Regular} FontFamily={FontFamily.Serif}> My Title H1 Serif Regular</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H2} FontWeight={FontWeight.Regular} FontFamily={FontFamily.Serif}> My Title H2 Serif Regular</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H3} FontWeight={FontWeight.Regular} FontFamily={FontFamily.Serif}> My Title H3 Serif Regular</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H4} FontWeight={FontWeight.Regular} FontFamily={FontFamily.Serif}> My Title H4 Serif Regular</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H5} FontWeight={FontWeight.Regular} FontFamily={FontFamily.Serif}> My Title H5 Serif Regular</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H6} FontWeight={FontWeight.Regular} FontFamily={FontFamily.Serif}> My Title H6 Serif Regular</TypoHeading>

                <hr/>

                <TypoHeading Type={TypoHeadingType.H1} FontFamily={FontFamily.Serif}> My Title H1 Serif Bold</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H2} FontFamily={FontFamily.Serif}> My Title H2 Serif Bold</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H3} FontFamily={FontFamily.Serif}> My Title H3 Serif Bold</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H4} FontFamily={FontFamily.Serif}> My Title H4 Serif Bold</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H5} FontFamily={FontFamily.Serif}> My Title H5 Serif Bold</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H6} FontFamily={FontFamily.Serif}> My Title H6 Serif Bold</TypoHeading>

                <hr/>

                <TypoHeading Type={TypoHeadingType.H1} FontWeight={FontWeight.Light} FontFamily={FontFamily.Monospace}> My Title H1 Monospace Light</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H2} FontWeight={FontWeight.Light} FontFamily={FontFamily.Monospace}> My Title H2 Monospace Light</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H3} FontWeight={FontWeight.Light} FontFamily={FontFamily.Monospace}> My Title H3 Monospace Light</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H4} FontWeight={FontWeight.Light} FontFamily={FontFamily.Monospace}> My Title H4 Monospace Light</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H5} FontWeight={FontWeight.Light} FontFamily={FontFamily.Monospace}> My Title H5 Monospace Light</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H6} FontWeight={FontWeight.Light} FontFamily={FontFamily.Monospace}> My Title H6 Monospace Light</TypoHeading>

                <hr/>

                <TypoHeading Type={TypoHeadingType.H1} FontWeight={FontWeight.Regular} FontFamily={FontFamily.Monospace}> My Title H1 Monospace Regular</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H2} FontWeight={FontWeight.Regular} FontFamily={FontFamily.Monospace}> My Title H2 Monospace Regular</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H3} FontWeight={FontWeight.Regular} FontFamily={FontFamily.Monospace}> My Title H3 Monospace Regular</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H4} FontWeight={FontWeight.Regular} FontFamily={FontFamily.Monospace}> My Title H4 Monospace Regular</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H5} FontWeight={FontWeight.Regular} FontFamily={FontFamily.Monospace}> My Title H5 Monospace Regular</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H6} FontWeight={FontWeight.Regular} FontFamily={FontFamily.Monospace}> My Title H6 Monospace Regular</TypoHeading>

                <hr/>

                <TypoHeading Type={TypoHeadingType.H1} FontFamily={FontFamily.Monospace}> My Title H1 Monospace Bold</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H2} FontFamily={FontFamily.Monospace}> My Title H2 Monospace Bold</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H3} FontFamily={FontFamily.Monospace}> My Title H3 Monospace Bold</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H4} FontFamily={FontFamily.Monospace}> My Title H4 Monospace Bold</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H5} FontFamily={FontFamily.Monospace}> My Title H5 Monospace Bold</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H6} FontFamily={FontFamily.Monospace}> My Title H6 Monospace Bold</TypoHeading>

                <hr/>
                <TypoHeading Type={TypoHeadingType.H3} FontWeight={FontWeight.Regular} Color={Color.Unknown}> My Title Unknown</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H3} FontWeight={FontWeight.Regular} Color={Color.Neutral}> My Title Neutral</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H3} FontWeight={FontWeight.Regular} Color={Color.Primary}> My Title Primary</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H3} FontWeight={FontWeight.Regular} Color={Color.Secondary}> My Title Secondary</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H3} FontWeight={FontWeight.Regular} Color={Color.Danger}> My Title Danger</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H3} FontWeight={FontWeight.Regular} Color={Color.Info}> My Title Info</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H3} FontWeight={FontWeight.Regular} Color={Color.Success}> My Title Success</TypoHeading>
                <TypoHeading Type={TypoHeadingType.H3} FontWeight={FontWeight.Regular} Color={Color.Warning}> My Title Warning</TypoHeading>
            </div>
        );
    }
}