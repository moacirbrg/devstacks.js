import { FontFamily } from '@libs/ui/enums/font-family.enum';
import { FrameworkElement } from '@libs/core/framework-element';
import { FontWeight } from '@libs/ui/enums/font-weight.enum';
import { FontSize } from '@libs/ui/enums/font-content-size.enum';
import { DOM } from '@libs/core/dom';
import { Color } from '@libs/ui/enums/color.enum';
import { Size } from '@libs/ui/enums/size.enum';

export class Styles {
    public static setDataColor(element: FrameworkElement, color: Color) {
        DOM.setAttribute(element, 'data-color', color);
    }

    public static setDataSize(element: FrameworkElement, size: Size) {
        DOM.setAttribute(element, 'data-size', size);
    }

    public static setFontFamily(element: FrameworkElement, fontFamily: FontFamily) {
        element.style.fontFamily = `var(${fontFamily})`;
    }

    public static setFontSize(element: FrameworkElement, fontSize: FontSize) {
        element.style.fontSize = `var(${fontSize})`;
    }

    public static setFontWeight(element: FrameworkElement, fontWeight: FontWeight) {
        element.style.fontWeight = `var(${fontWeight})`;
    }
}