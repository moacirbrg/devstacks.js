import { Router } from '@libs/routing/router';
import { Component } from '@libs/core/component';
import { HomeController } from '@components/controllers/home/home.controller';

export class Routes {
    public static Build(): void {
        Router.setRoutes([
            {
                canActive: [],
                component: HomeController as typeof Component,
                path: '/',
            }
        ]);
    }
}