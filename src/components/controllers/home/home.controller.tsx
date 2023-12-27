import { FrameworkElement } from '@libs/core/framework-element';
import { Component } from '@libs/core/component';
import { DOM } from '@libs/core/dom';
import { TypoHeading } from '@libs/ui/typo/heading/typo-heading.component';
import { FontHeadSize } from '@libs/ui/enums/font-head-size';

export class HomeController extends Component {
    public render(): FrameworkElement {
        return (
            <div class="home-controller">
                <TypoHeading FontSize={FontHeadSize.H1}>Home</TypoHeading>
                <p>Take a look at the samples:</p>
                <ul>
                    <li><a routerLink="/samples/typo-heading">Typo Heading</a></li>
                    <li><a routerLink="/samples/typo-message">Typo Message</a></li>
                </ul>
            </div>
        );
    }
}