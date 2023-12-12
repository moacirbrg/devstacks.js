import { DOM } from './libs/core/dom';
import { App } from './app';
import { Routes } from './routes';

Routes.Build();

window.onload = () => {
    const app: HTMLElement = document.getElementById('app-root')!;
    DOM.render(App.getInstance(), app);
};