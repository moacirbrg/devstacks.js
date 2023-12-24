import { Router } from '@libs/routing/router';
import { Component } from '@libs/core/component';
import { HomeController } from '@components/controllers/home/home.controller';
import { SampleTypoHeadingController } from '@components/controllers/samples/sample-typo-heading/sample-typo-heading.controller';

export class Routes {
    public static Build(): void {
        Router.setRoutes([
            {
                canActive: [],
                component: HomeController as typeof Component,
                path: '/',
            },
            {
                canActive: [],
                component: SampleTypoHeadingController as typeof Component,
                path: '/samples/typo-heading',
            }
        ]);
    }
}