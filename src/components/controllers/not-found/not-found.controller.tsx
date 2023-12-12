import { FrameworkElement } from '../../../libs/core/framework-element';
import { Component } from '../../../libs/core/component';
import { DOM } from '../../../libs/core/dom';

export class NotFoundController extends Component {
    public render(): FrameworkElement {
        return (
            <div>404 Not Found!</div>
    );
    }
}