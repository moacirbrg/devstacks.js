import { FrameworkElement } from '@libs/core/framework-element';
import { Component } from '@libs/core/component';
import { DOM } from '@libs/core/dom';
import { TypoHeading } from '@libs/ui/typo/heading/typo-heading.component';
import { TypoMessage } from '@libs/ui/typo/message/typo-message.component';
import { Color } from '@libs/ui/enums/color.enum';
import { TypoHeadingType } from '@libs/ui/typo/heading/typo-heading-type';

export class SampleTypoMessageController extends Component {
    public render(): FrameworkElement {
        return (
            <div class="sample-typo-heading-controller">
                <TypoHeading Type={TypoHeadingType.H2}>Single-line</TypoHeading>
                <TypoMessage Color={Color.Unknown}>Message with Unknown color</TypoMessage>
                <TypoMessage Color={Color.Neutral}>Message with Neutral color</TypoMessage>
                <TypoMessage Color={Color.Primary}>Message with Primary color</TypoMessage>
                <TypoMessage Color={Color.Secondary}>Message with Secondary color</TypoMessage>
                <TypoMessage Color={Color.Danger}>Message with Danger color</TypoMessage>
                <TypoMessage Color={Color.Success}>Message with Success color</TypoMessage>
                <TypoMessage Color={Color.Warning}>Message with Warning color</TypoMessage>
                <TypoMessage Color={Color.Info}>Message with Info color</TypoMessage>

                <TypoHeading Type={TypoHeadingType.H2}>Multi-line</TypoHeading>
                <TypoMessage Color={Color.Unknown}>
                    Multi-line Unknown Message: It is a long established fact that a
                    reader will be distracted by the readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                    'Content here, content here', making it look like readable English. Many desktop publishing packages
                    and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                    will uncover many web sites still in their infancy.
                </TypoMessage>
                <TypoMessage Color={Color.Neutral}>
                    Multi-line Neutral Message: It is a long established fact that a reader
                    will be distracted by the readable content of a page when looking at its layout. The point of using
                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                    'Content here, content here', making it look like readable English. Many desktop publishing packages
                    and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                    will uncover many web sites still in their infancy.
                </TypoMessage>
                <TypoMessage Color={Color.Primary}>
                    Multi-line Primary Message: It is a long established fact that a reader
                    will be distracted by the readable content of a page when looking at its layout. The point of using
                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                    'Content here, content here', making it look like readable English. Many desktop publishing packages
                    and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                    will uncover many web sites still in their infancy.
                </TypoMessage>
                <TypoMessage Color={Color.Secondary}>
                    Multi-line Secondary Message: It is a long established fact that a
                    reader will be distracted by the readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                    'Content here, content here', making it look like readable English. Many desktop publishing packages
                    and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                    will uncover many web sites still in their infancy.
                </TypoMessage>
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