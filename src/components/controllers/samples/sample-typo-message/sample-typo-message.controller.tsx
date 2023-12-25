import { FrameworkElement } from '@libs/core/framework-element';
import { Component } from '@libs/core/component';
import { DOM } from '@libs/core/dom';
import { TypoHeading } from '@libs/ui/typo/heading/typo-heading.component';
import { FontFamily } from '@libs/ui/enums/font-family.enum';
import { TypoMessage } from '@libs/ui/typo/message/typo-message.component';
import { Color } from '@libs/ui/enums/color.enum';
import { FontWeight } from '@libs/ui/enums/font-weight.enum';
import { FontHeadSize } from '@libs/ui/enums/font-head-size';

export class SampleTypoMessageController extends Component {
    public render(): FrameworkElement {
        return (
            <div class="sample-typo-heading-controller">
                <TypoHeading Size={FontHeadSize.H2}>Light</TypoHeading>
                <TypoMessage Color={Color.Danger} FontWeight={FontWeight.Light}>Light Danger Message</TypoMessage>
                <TypoMessage Color={Color.Success} FontWeight={FontWeight.Light}>Light Success Message</TypoMessage>
                <TypoMessage Color={Color.Warning} FontWeight={FontWeight.Light}>Light Warning Message</TypoMessage>
                <TypoMessage Color={Color.Info} FontWeight={FontWeight.Light}>Light Info Message</TypoMessage>

                <TypoHeading Size={FontHeadSize.H2}>Regular</TypoHeading>
                <TypoMessage Color={Color.Danger} FontWeight={FontWeight.Regular}>Regular Danger Message</TypoMessage>
                <TypoMessage Color={Color.Success} FontWeight={FontWeight.Regular}>Regular Success Message</TypoMessage>
                <TypoMessage Color={Color.Warning} FontWeight={FontWeight.Regular}>Regular Warning Message</TypoMessage>
                <TypoMessage Color={Color.Info} FontWeight={FontWeight.Regular}>Regular Info Message</TypoMessage>

                <TypoHeading Size={FontHeadSize.H2}>Bold</TypoHeading>
                <TypoMessage Color={Color.Danger} FontWeight={FontWeight.Bold}>Bold Danger Message</TypoMessage>
                <TypoMessage Color={Color.Success} FontWeight={FontWeight.Bold}>Bold Success Message</TypoMessage>
                <TypoMessage Color={Color.Warning} FontWeight={FontWeight.Bold}>Bold Warning Message</TypoMessage>
                <TypoMessage Color={Color.Info} FontWeight={FontWeight.Bold}>Bold Info Message</TypoMessage>

                <TypoHeading Size={FontHeadSize.H2}>Sans-Serif</TypoHeading>
                <TypoMessage Color={Color.Danger}>Sans-Serif Danger Message</TypoMessage>
                <TypoMessage Color={Color.Success}>Sans-Serif Success Message</TypoMessage>
                <TypoMessage Color={Color.Warning}>Sans-Serif Warning Message</TypoMessage>
                <TypoMessage Color={Color.Info}>Sans-Serif Info Message</TypoMessage>

                <TypoHeading Size={FontHeadSize.H2}>Serif</TypoHeading>
                <TypoMessage Color={Color.Danger} FontFamily={FontFamily.Serif}>Serif Danger Message</TypoMessage>
                <TypoMessage Color={Color.Success} FontFamily={FontFamily.Serif}>Serif Success Message</TypoMessage>
                <TypoMessage Color={Color.Warning} FontFamily={FontFamily.Serif}>Serif Warning Message</TypoMessage>
                <TypoMessage Color={Color.Info} FontFamily={FontFamily.Serif}>Serif Info Message</TypoMessage>

                <TypoHeading Size={FontHeadSize.H2}>Monospace</TypoHeading>
                <TypoMessage Color={Color.Danger} FontFamily={FontFamily.Monospace}>Monospace Danger Message</TypoMessage>
                <TypoMessage Color={Color.Success} FontFamily={FontFamily.Monospace}>Monospace Success Message</TypoMessage>
                <TypoMessage Color={Color.Warning} FontFamily={FontFamily.Monospace}>Monospace Warning Message</TypoMessage>
                <TypoMessage Color={Color.Info} FontFamily={FontFamily.Monospace}>Monospace Info Message</TypoMessage>

                <TypoHeading Size={FontHeadSize.H2}>Multi-line</TypoHeading>
                <TypoMessage Color={Color.Danger}>
                    Multi-line Danger Message: It is a long established fact that a reader
                    will be distracted by the readable content of a page when looking at its layout. The point of using
                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                    'Content here, content here', making it look like readable English. Many desktop publishing packages
                    and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                    will uncover many web sites still in their infancy.
                </TypoMessage>
                <TypoMessage Color={Color.Success}>
                    Multi-line Success Message: It is a long established fact that a
                    reader will be distracted by the readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                    'Content here, content here', making it look like readable English. Many desktop publishing packages
                    and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                    will uncover many web sites still in their infancy.
                </TypoMessage>
                <TypoMessage Color={Color.Warning}>
                    Multi-line Warning Message: It is a long established fact that a
                    reader will be distracted by the readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                    'Content here, content here', making it look like readable English. Many desktop publishing packages
                    and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                    will uncover many web sites still in their infancy.
                </TypoMessage>
                <TypoMessage Color={Color.Info}>
                    Multi-line Info Message: It is a long established fact that a reader
                    will be distracted by the readable content of a page when looking at its layout. The point of using
                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                    'Content here, content here', making it look like readable English. Many desktop publishing packages
                    and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                    will uncover many web sites still in their infancy.
                </TypoMessage>

            </div>
        );
    }
}