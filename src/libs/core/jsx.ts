declare namespace JSX {
    interface Element extends HTMLElement {}

    interface IntrinsicElements extends HTMLElement {
        [elmName: string]: unknown;
    }

    interface Properties {
        [propName: string]: unknown;
    }
}