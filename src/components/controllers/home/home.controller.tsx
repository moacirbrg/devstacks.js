import { FrameworkElement } from '@libs/core/framework-element';
import { Component } from '@libs/core/component';
import { DOM } from '@libs/core/dom';
import { TypoHeading } from '@libs/ui/typo/heading/typo-heading.component';
import { TypoHeadingType } from '@libs/ui/typo/heading/typo-heading-type.enum';

export class HomeController extends Component {
    public render(): FrameworkElement {
        return (
            <div class="home-controller">
                <TypoHeading Type={TypoHeadingType.H1}>DevStacks.js framework samples</TypoHeading>
                <p>Take a look at these samples:</p>
                <ul>
                    <li><a routerLink="/samples/form-button">Form Button</a></li>
                    <li><a routerLink="/samples/form-text-field">Form TextField</a></li>
                    <li><a routerLink="/samples/typo-heading">Typo Heading</a></li>
                    <li><a routerLink="/samples/typo-message">Typo Message</a></li>
                </ul>
            </div>
        );
    }
}