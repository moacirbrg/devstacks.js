import { FontFamily } from '@libs/ui/enums/font-family.enum';
import { FrameworkElement } from '@libs/core/framework-element';
import { FontWeight } from '@libs/ui/enums/font-weight.enum';
import { FontSize } from '@libs/ui/enums/font-content-size.enum';
import { DOM } from '@libs/core/dom';
import { Color } from '@libs/ui/enums/color.enum';

export class Styles {
    public static setDataColor(element: FrameworkElement, color: Color) {
        DOM.setAttribute(element, 'data-color', color);
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