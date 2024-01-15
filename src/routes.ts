import { Router } from '@libs/routing/router';
import { Component } from '@libs/core/component';
import { HomeController } from '@components/controllers/home/home.controller';
import { SampleTypoHeadingController } from '@components/controllers/samples/sample-typo-heading/sample-typo-heading.controller';
import { SampleTypoMessageController } from '@components/controllers/samples/sample-typo-message/sample-typo-message.controller';
import {
    SampleFormButtonController
} from '@components/controllers/samples/sample-form-button/sample-form-button.controller';
import {
    SampleFormTextFieldController
} from '@components/controllers/samples/sampel-form-text-field/sample-form-text-field.controller';

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
                component: SampleFormButtonController as typeof Component,
                path: '/samples/form-button',
            },
            {
                canActive: [],
                component: SampleFormTextFieldController as typeof Component,
                path: '/samples/form-text-field',
            },
            {
                canActive: [],
                component: SampleTypoHeadingController as typeof Component,
                path: '/samples/typo-heading',
            },
            {
                canActive: [],
                component: SampleTypoMessageController as typeof Component,
                path: '/samples/typo-message',
            }
        ]);
    }
}