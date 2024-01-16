import { Class } from "../data-type/class";
import { Component } from "./component";
import { ElementRef } from "./element-ref";
import { FrameworkElement } from "./framework-element";
import { Router } from '@libs/routing/router';
import {ComponentProps} from "./component-props";

type JSXContent = string[] | HTMLElement[];
type ComponentType = Class<Component<unknown>>;

export class DOM {
    public static appendChild(parent: Element, child: Element): void {
        parent.appendChild(child);
    }

    public static clearChildren(parent: Element): void {
        if (parent === null || parent === undefined) {
            return;
        }

        while (parent.lastChild) {
            parent.removeChild(parent.lastChild);
        }
    }

    public static replaceChildren(parent: Element, ...children: string[] | FrameworkElement[]): void {
        DOM.clearChildren(parent);

        for (const child of children) {
            DOM.applyContent(parent as FrameworkElement, child);
        }
    }

    public static create(tag: string | Component, props: JSX.Properties, ...contents: JSXContent): FrameworkElement|null {
        if (!DOM.shouldCreate(props)) {
            return null;
        }

        if (typeof tag === 'string') {
            const el: FrameworkElement = document.createElement(tag);

            if (props !== null) {
                DOM.applyProperties(el, props);
            }

            if (contents !== undefined) {
                DOM.applyContents(el, ...contents);
            }

            return el;
        } else if (typeof tag === 'function') {
            return this.createComponent(tag, props, contents);
        } else {
            return null;
        }
    }

    public static createComponent(tag: ComponentType, props: JSX.Properties, contents: JSXContent): FrameworkElement|null {
        if (!DOM.shouldCreate(props)) {
            return null;
        }

        try {
            const component: Component<ComponentProps> = new tag(props || {}) as Component<ComponentProps>;
            component.children = contents;

            const rendered = component.render();
            rendered.component = component;
            component.element = rendered;

            // It will pass the HTML attributes to the component root element.
            if (props !== null) {
                DOM.applyProperties(rendered, props);
            }

            // Execute the OnRendered asynchronously to force execution of it only after all contents be rendered.
            if (typeof(component.onRendered) === 'function') {
                setTimeout(() => {
                    component.onRendered!();
                }, 0);
            }

            return rendered;
        }
        catch (e) {
            console.error(`Error trying to create component ${tag.name}.`, e);
            return null;
        }
    }

    public static render(component: Component, parent: HTMLElement): void {
        parent.appendChild(component.render());
    }

    private static applyContents(el: HTMLElement, ...contents: JSXContent): void {
        for (const content of contents) {
            if (Array.isArray(content)) {
                for (const contentFragment of content) {
                    DOM.applyContent(el, contentFragment);
                }
            } else {
                DOM.applyContent(el, content);
            }
        }
    }

    private static applyContent(el: FrameworkElement, content: string | FrameworkElement): void {
        if (content === null) {
            return;
        }

        if (content instanceof HTMLElement) {
            if (content.if === false) {
                return;
            }

            el.appendChild(content);
        } else {
            const textNode = document.createTextNode(content);
            el.appendChild(textNode);
        }
    }

    private static applyProperties(el: FrameworkElement, props: JSX.Properties) {
        const propNames = Object.keys(props);

        for (const propName of propNames) {
            // Attributes with PascalCase are components attributes instead of HTML attributes.
            if (!DOM.isPascalCase(propName)) {
                // Attributes with prefix "on" are functions. They must handled by addEventListener.
                if (this.isEventProperty(propName)) {
                    if (typeof props[propName] === 'function') {
                        el.addEventListener(propName.substring(2), props[propName] as () => void);
                    }
                }
                // The attribute "ref" is a framework attribute to pass the created element to the component.
                else if (propName === 'ref') {
                    const ref = props[propName] as ElementRef;
                    ref.current = el;
                }
                else if (propName === 'if' && typeof props[propName] === 'boolean') {
                    el.if = props[propName] as boolean;
                }
                else if (propName === 'visibility' && typeof props[propName] === 'boolean') {
                    if (props[propName] === true) {
                        DOM.show(el);
                    }
                    else {
                        DOM.hide(el);
                    }
                }
                // The attribute "routerLink" is a shortcut for the Route navigation.
                else if (propName === 'routerLink') {
                    el.addEventListener('click', () => {
                        Router.navigateByUrl(props[propName] as string);
                    });
                }
                // Any other kind of attribute is a normal HTML attribute.
                else {
                    el.setAttribute(propName, props[propName] as string);
                }
            }
        }
    }

    public static getAttribute(el: HTMLElement, attributeName: string): string|null {
        return el.getAttribute(attributeName);
    }

    public static hasAttribute(el: HTMLElement, attributeName: string): boolean {
        return el.hasAttribute(attributeName);
    }

    public static removeAttribute(el: HTMLElement, attributeName: string): void {
        el.removeAttribute(attributeName);
    }

    public static setAttribute<T>(el: HTMLElement, attributeName: string, attributeValue: T|null = null): void {
        el.setAttribute(attributeName, (attributeValue as unknown as string) || '');
    }

    public static setStyle(el: HTMLElement, styleName: string, styleValue: string): void {
        el.style[styleName as any] = styleValue;
    }

    public static show(el: HTMLElement): void {
        el.removeAttribute('data-hidden');
    }

    public static hide(el: HTMLElement): void {
        el.setAttribute('data-hidden', '');
    }

    public static replaceClasses(el: HTMLElement, ...classes: string[]): void {
        el.className = '';
        DOM.setClasses(el, ...classes);
    }

    public static setClasses(el: HTMLElement, ...classes: string[]): void {
        el.className = classes.join(' ');
    }

    public static hasClass(el: HTMLElement, className: string): boolean {
        return el.classList.contains(className);
    }

    public static buildClasses(classes: Record<string, boolean>): string {
        const classNames: string[] = [];

        for (const className in classes) {
            if (classes[className]) {
                classNames.push(className);
            }
        }

        return classNames.join(' ');
    }

    public static setHtml(el: HTMLElement, html: string): void {
        el.innerHTML = html;
    }

    public static setText(el: HTMLElement, text: string): void {
        el.textContent = text;
    }

    private static isEventProperty(name: string): boolean {
        return name.length > 2 && name[0] === 'o' && name[1] === 'n';
    }

    private static isPascalCase(name: string): boolean {
        return name.charCodeAt(0) >= 65 && name.charCodeAt(0) <= 90;
    }

    private static shouldCreate(props: JSX.Properties): boolean {
        if (props === null || props === undefined) {
            return true;
        }

        if (!props.hasOwnProperty('if')) {
            return true;
        }

        return props['if'] as boolean;
    }
}