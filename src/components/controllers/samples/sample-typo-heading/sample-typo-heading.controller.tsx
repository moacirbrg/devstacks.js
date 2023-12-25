import { FrameworkElement } from '@libs/core/framework-element';
import { Component } from '@libs/core/component';
import { DOM } from '@libs/core/dom';
import { TypoHeading } from '@libs/ui/typo/heading/typo-heading.component';
import { FontWeight } from '@libs/ui/enums/font-weight.enum';
import { FontFamily } from '@libs/ui/enums/font-family.enum';
import { FontHeadSize } from '@libs/ui/enums/font-head-size';

export class SampleTypoHeadingController extends Component {
    public render(): FrameworkElement {
        return (
            <div class="sample-typo-heading-controller">
                <TypoHeading Size={FontHeadSize.H1} Weight={FontWeight.Light}> My Title H1 Sans-Serif Light</TypoHeading>
                <TypoHeading Size={FontHeadSize.H2} Weight={FontWeight.Light}> My Title H2 Sans-Serif Light</TypoHeading>
                <TypoHeading Size={FontHeadSize.H3} Weight={FontWeight.Light}> My Title H3 Sans-Serif Light</TypoHeading>
                <TypoHeading Size={FontHeadSize.H4} Weight={FontWeight.Light}> My Title H4 Sans-Serif Light</TypoHeading>
                <TypoHeading Size={FontHeadSize.H5} Weight={FontWeight.Light}> My Title H5 Sans-Serif Light</TypoHeading>
                <TypoHeading Size={FontHeadSize.H6} Weight={FontWeight.Light}> My Title H6 Sans-Serif Light</TypoHeading>

                <hr/>

                <TypoHeading Size={FontHeadSize.H1} Weight={FontWeight.Regular}> My Title H1 Sans-Serif Regular</TypoHeading>
                <TypoHeading Size={FontHeadSize.H2} Weight={FontWeight.Regular}> My Title H2 Sans-Serif Regular</TypoHeading>
                <TypoHeading Size={FontHeadSize.H3} Weight={FontWeight.Regular}> My Title H3 Sans-Serif Regular</TypoHeading>
                <TypoHeading Size={FontHeadSize.H4} Weight={FontWeight.Regular}> My Title H4 Sans-Serif Regular</TypoHeading>
                <TypoHeading Size={FontHeadSize.H5} Weight={FontWeight.Regular}> My Title H5 Sans-Serif Regular</TypoHeading>
                <TypoHeading Size={FontHeadSize.H6} Weight={FontWeight.Regular}> My Title H6 Sans-Serif Regular</TypoHeading>

                <hr/>

                <TypoHeading Size={FontHeadSize.H1}> My Title H1 Sans-Serif Bold</TypoHeading>
                <TypoHeading Size={FontHeadSize.H2}> My Title H2 Sans-Serif Bold</TypoHeading>
                <TypoHeading Size={FontHeadSize.H3}> My Title H3 Sans-Serif Bold</TypoHeading>
                <TypoHeading Size={FontHeadSize.H4}> My Title H4 Sans-Serif Bold</TypoHeading>
                <TypoHeading Size={FontHeadSize.H5}> My Title H5 Sans-Serif Bold</TypoHeading>
                <TypoHeading Size={FontHeadSize.H6}> My Title H6 Sans-Serif Bold</TypoHeading>

                <hr/>

                <TypoHeading Size={FontHeadSize.H1} Weight={FontWeight.Light} FontFamily={FontFamily.Serif}> My Title H1 Serif Light</TypoHeading>
                <TypoHeading Size={FontHeadSize.H2} Weight={FontWeight.Light} FontFamily={FontFamily.Serif}> My Title H2 Serif Light</TypoHeading>
                <TypoHeading Size={FontHeadSize.H3} Weight={FontWeight.Light} FontFamily={FontFamily.Serif}> My Title H3 Serif Light</TypoHeading>
                <TypoHeading Size={FontHeadSize.H4} Weight={FontWeight.Light} FontFamily={FontFamily.Serif}> My Title H4 Serif Light</TypoHeading>
                <TypoHeading Size={FontHeadSize.H5} Weight={FontWeight.Light} FontFamily={FontFamily.Serif}> My Title H5 Serif Light</TypoHeading>
                <TypoHeading Size={FontHeadSize.H6} Weight={FontWeight.Light} FontFamily={FontFamily.Serif}> My Title H6 Serif Light</TypoHeading>

                <hr/>

                <TypoHeading Size={FontHeadSize.H1} Weight={FontWeight.Regular} FontFamily={FontFamily.Serif}> My Title H1 Serif Regular</TypoHeading>
                <TypoHeading Size={FontHeadSize.H2} Weight={FontWeight.Regular} FontFamily={FontFamily.Serif}> My Title H2 Serif Regular</TypoHeading>
                <TypoHeading Size={FontHeadSize.H3} Weight={FontWeight.Regular} FontFamily={FontFamily.Serif}> My Title H3 Serif Regular</TypoHeading>
                <TypoHeading Size={FontHeadSize.H4} Weight={FontWeight.Regular} FontFamily={FontFamily.Serif}> My Title H4 Serif Regular</TypoHeading>
                <TypoHeading Size={FontHeadSize.H5} Weight={FontWeight.Regular} FontFamily={FontFamily.Serif}> My Title H5 Serif Regular</TypoHeading>
                <TypoHeading Size={FontHeadSize.H6} Weight={FontWeight.Regular} FontFamily={FontFamily.Serif}> My Title H6 Serif Regular</TypoHeading>

                <hr/>

                <TypoHeading Size={FontHeadSize.H1} FontFamily={FontFamily.Serif}> My Title H1 Serif Bold</TypoHeading>
                <TypoHeading Size={FontHeadSize.H2} FontFamily={FontFamily.Serif}> My Title H2 Serif Bold</TypoHeading>
                <TypoHeading Size={FontHeadSize.H3} FontFamily={FontFamily.Serif}> My Title H3 Serif Bold</TypoHeading>
                <TypoHeading Size={FontHeadSize.H4} FontFamily={FontFamily.Serif}> My Title H4 Serif Bold</TypoHeading>
                <TypoHeading Size={FontHeadSize.H5} FontFamily={FontFamily.Serif}> My Title H5 Serif Bold</TypoHeading>
                <TypoHeading Size={FontHeadSize.H6} FontFamily={FontFamily.Serif}> My Title H6 Serif Bold</TypoHeading>

                <hr/>

                <TypoHeading Size={FontHeadSize.H1} Weight={FontWeight.Light} FontFamily={FontFamily.Monospace}> My Title H1 Monospace Light</TypoHeading>
                <TypoHeading Size={FontHeadSize.H2} Weight={FontWeight.Light} FontFamily={FontFamily.Monospace}> My Title H2 Monospace Light</TypoHeading>
                <TypoHeading Size={FontHeadSize.H3} Weight={FontWeight.Light} FontFamily={FontFamily.Monospace}> My Title H3 Monospace Light</TypoHeading>
                <TypoHeading Size={FontHeadSize.H4} Weight={FontWeight.Light} FontFamily={FontFamily.Monospace}> My Title H4 Monospace Light</TypoHeading>
                <TypoHeading Size={FontHeadSize.H5} Weight={FontWeight.Light} FontFamily={FontFamily.Monospace}> My Title H5 Monospace Light</TypoHeading>
                <TypoHeading Size={FontHeadSize.H6} Weight={FontWeight.Light} FontFamily={FontFamily.Monospace}> My Title H6 Monospace Light</TypoHeading>

                <hr/>

                <TypoHeading Size={FontHeadSize.H1} Weight={FontWeight.Regular} FontFamily={FontFamily.Monospace}> My Title H1 Monospace Regular</TypoHeading>
                <TypoHeading Size={FontHeadSize.H2} Weight={FontWeight.Regular} FontFamily={FontFamily.Monospace}> My Title H2 Monospace Regular</TypoHeading>
                <TypoHeading Size={FontHeadSize.H3} Weight={FontWeight.Regular} FontFamily={FontFamily.Monospace}> My Title H3 Monospace Regular</TypoHeading>
                <TypoHeading Size={FontHeadSize.H4} Weight={FontWeight.Regular} FontFamily={FontFamily.Monospace}> My Title H4 Monospace Regular</TypoHeading>
                <TypoHeading Size={FontHeadSize.H5} Weight={FontWeight.Regular} FontFamily={FontFamily.Monospace}> My Title H5 Monospace Regular</TypoHeading>
                <TypoHeading Size={FontHeadSize.H6} Weight={FontWeight.Regular} FontFamily={FontFamily.Monospace}> My Title H6 Monospace Regular</TypoHeading>

                <hr/>

                <TypoHeading Size={FontHeadSize.H1} FontFamily={FontFamily.Monospace}> My Title H1 Monospace Bold</TypoHeading>
                <TypoHeading Size={FontHeadSize.H2} FontFamily={FontFamily.Monospace}> My Title H2 Monospace Bold</TypoHeading>
                <TypoHeading Size={FontHeadSize.H3} FontFamily={FontFamily.Monospace}> My Title H3 Monospace Bold</TypoHeading>
                <TypoHeading Size={FontHeadSize.H4} FontFamily={FontFamily.Monospace}> My Title H4 Monospace Bold</TypoHeading>
                <TypoHeading Size={FontHeadSize.H5} FontFamily={FontFamily.Monospace}> My Title H5 Monospace Bold</TypoHeading>
                <TypoHeading Size={FontHeadSize.H6} FontFamily={FontFamily.Monospace}> My Title H6 Monospace Bold</TypoHeading>
            </div>
        );
    }
}