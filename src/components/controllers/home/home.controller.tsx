import { FrameworkElement } from '@libs/core/framework-element';
import { Component } from '@libs/core/component';
import { DOM } from '@libs/core/dom';

export class HomeController extends Component {
    public render(): FrameworkElement {
        return (
            <div>
                <div>Home</div>
            </div>
        );
    }
}