import { Route } from './route';

export class RouterUtils {
    public static getRouteParams(route: Route): Record<string, string> {
        if (route === null) {
            return {};
        }

        const urlPath = this.normalizePath(window.location.pathname);
        const urlSegments = urlPath.split('/');
        const routeSegments = route.path.split('/');

        if (urlSegments.length !== routeSegments.length) {
            return {};
        }

        const params: Record<string, string> = {};

        for (let i = 0; i < routeSegments.length; i++) {
            const from = routeSegments[i].indexOf('{');
            const to = routeSegments[i].indexOf('}');

            if (from > -1 && to > -1) {
                const name = routeSegments[i].substring(from + 1, to);
                params[name] = urlSegments[i];
            }
        }

        return params;
    }

    public static normalizePath(url: string): string {
        if (url[url.length - 1] === '/') {
            url = url.substring(0, url.length - 1);
        }

        if (url[0] !== '/') {
            url = `/${url}`;
        }

        return url;
    }
}