import { FrameworkElement } from '@libs/core/framework-element';
import { Component } from '@libs/core/component';
import { DOM } from '@libs/core/dom';
import { TypoMessageShared } from '@libs/ui/typo/message/typo-message.shared';
import { TypoMessageColor } from '@libs/ui/typo/message/typo-message.enum';

export class HomeController extends Component {
    public render(): FrameworkElement {
        return (
            <div>
                <div>Home</div>
                <TypoMessageShared Color={TypoMessageColor.Info}>My tiny message!</TypoMessageShared>
            </div>
        );
    }
}