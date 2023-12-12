import { Component } from './libs/core/component';
import { FrameworkElement } from './libs/core/framework-element';
import { DOM } from './libs/core/dom';
import { Router } from './libs/routing/router';
import { RouteNotFoundError } from './libs/error/route-not-found-error';
import { NotFoundController } from './components/controllers/not-found/not-found.controller';
import { ElementRef } from './libs/core/element-ref';
import { TypoMessageShared } from './libs/ui/typo/message/typo-message.shared';
import { TypoMessageColor } from './libs/ui/typo/message/typo-message.enum';

export class App extends Component {
    private static instance: App|null = null;
    private rootComponentEl: ElementRef<HTMLDivElement> = Component.createRef();

    private constructor() {
        super();
        window.onpopstate = App.rerender;
    }

    public static getInstance(): App {
        if (App.instance === null) {
            App.instance = new App();
        }

        return App.instance;
    }

    public render(): FrameworkElement {
        return (
            <div id="root-component" ref={this.rootComponentEl}>
                {this.getControllerView()}
            </div>
        );
    }

    public static rerender(): void {
        if (App.getInstance().rootComponentEl === null) {
            return;
        }

        const newRouteView: FrameworkElement = App.getInstance().getControllerView();
        DOM.replaceChildren(App.getInstance().rootComponentEl.current!, newRouteView);
    }

    private getControllerView(): FrameworkElement {
        try {
            return Router.renderRoute()!;
        }
        catch (e) {
            if (e instanceof RouteNotFoundError) {
                return DOM.createComponent(NotFoundController, {}, [])!;
            }

            console.log(e);
            // TODO: Handle other errors
        }

        return (
            <TypoMessageShared Color={TypoMessageColor.Danger}>
                An error happened, this page blocked itself for your security, please contact us.
            </TypoMessageShared>
        );
    }
}