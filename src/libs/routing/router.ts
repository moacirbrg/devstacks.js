import { Component } from '@libs/core/component';
import { Route } from './route';
import { DynamicRoute } from './dynamic-route';
import { StaticRoutes } from './static-route';
import { RouterUtils } from './router-utils';
import { FrameworkElement } from '@libs/core/framework-element';
import { DOM } from '@libs/core/dom';
import { RouteNotFoundError } from '@libs/error/route-not-found-error';
import { App } from '@src/app';

export class Router {
    private static _currentComponent: Component|null = null;
    private static _currentRoute: Route|null = null;
    private static _dynamicRoutes: DynamicRoute[] = [];
    private static _staticRoutes: StaticRoutes = {};

    public static findRoute(): Route|null {
        const staticRoute = this.findStaticRoute();
        if (staticRoute !== null) {
            return staticRoute;
        }

        return this.findDynamicRoute();
    }

    public static getCurrentRoute(): Route|null {
        return this._currentRoute;
    }

    public static getParams(): Record<string, string> {
        const route: Route|null = this.getCurrentRoute();

        if (route === null) {
            return {};
        }

        return RouterUtils.getRouteParams(route);
    }

    public static navigateByUrl(url: string, forgetCurrentUrl: boolean = false): void {
        this.setUrl(url, forgetCurrentUrl);
        App.rerender();
    }

    public static redirectToExternalLink(url: string): void {
        window.open(url);
    }

    public static renderRoute(): FrameworkElement|null {
        if (this._currentComponent !== null) {
            if (this._currentComponent.onDestroy) {
                this._currentComponent.onDestroy();
            }
        }

        this._currentRoute = this.findRoute();

        if (this._currentRoute !== null) {
            for (const canActive of this._currentRoute.canActive) {
                if (!canActive.canActive(this._currentRoute)) {
                    return null;
                }
            }

            const rendered: FrameworkElement|null = DOM.createComponent(this._currentRoute.component, {}, []);
            this._currentComponent = rendered?.component ?? null;

            return rendered;
        } else {
            throw new RouteNotFoundError('');
        }
    }

    public static setRoutes(routes: Route[]): void {
        this._staticRoutes = {};
        this._dynamicRoutes = [];

        for (const route of routes) {
            if (route.path.length === 0) {
                throw new Error('No route path can be empty.');
            }

            route.path = RouterUtils.normalizePath(route.path);

            if (route.path.indexOf('{') === -1) {
                this._staticRoutes[route.path] = route;
            } else {
                this._dynamicRoutes.push({
                    route: route,
                    segments: route.path.split('/'),
                });
            }
        }
    }

    public static setUrl(url: string, forgetCurrentUrl: boolean = false): void {
        if (!forgetCurrentUrl) {
            history.pushState(null, "", url);
        } else {
            history.replaceState(null, "", url);
        }
    }

    private static findDynamicRoute(): Route|null {
        const urlPath = window.location.pathname;

        const urlSegments = urlPath.split('/');
        for (const route of this._dynamicRoutes) {
            if (route.segments.length !== urlSegments.length) {
                continue;
            }

            let found = false;
            for (let i = 0; i < route.segments.length; i++) {
                if (route.segments[i].indexOf('{') === -1 && route.segments[i] !== urlSegments[i]) {
                    break;
                }

                if (i === route.segments.length - 1) {
                    found = true;
                }
            }

            if (found) {
                return route.route;
            }
        }

        return null;
    }

    private static findStaticRoute(): Route|null {
        let urlPath = window.location.pathname;

        if (urlPath.length > 1 && urlPath[urlPath.length - 1] === '/') {
            urlPath = urlPath.substring(0, urlPath.length - 1);
        }

        const staticRoute = this._staticRoutes[urlPath];
        if (staticRoute !== undefined) {
            return staticRoute;
        }

        return null;
    }
}