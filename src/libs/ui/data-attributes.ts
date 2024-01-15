import { FrameworkElement } from '@libs/core/framework-element';
import { DOM } from '@libs/core/dom';
import { Color } from '@libs/ui/enums/color.enum';
import { Size } from '@libs/ui/enums/size.enum';

export class DataAttributes {
    public static setDataColor(element: FrameworkElement, color: Color) {
        DOM.setAttribute(element, 'data-color', color);
    }

    public static setDataSize(element: FrameworkElement, size: Size) {
        DOM.setAttribute(element, 'data-size', size);
    }
}