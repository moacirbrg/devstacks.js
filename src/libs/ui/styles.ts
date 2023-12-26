import { FontFamily } from '@libs/ui/enums/font-family.enum';
import { FrameworkElement } from '@libs/core/framework-element';
import { FontWeight } from '@libs/ui/enums/font-weight.enum';
import { FontContentSize } from '@libs/ui/enums/font-content-size.enum';
import { FontHeadSize } from '@libs/ui/enums/font-head-size';
import { DOM } from '@libs/core/dom';

export class Styles {
    public static setDataColor(element: FrameworkElement, color: string) {
        DOM.setAttribute(element, 'data-color', color);
    }

    public static setFontFamily(element: FrameworkElement, fontFamily: FontFamily) {
        element.style.fontFamily = `var(${fontFamily})`;
    }

    public static setFontSize(element: FrameworkElement, fontSize: FontContentSize|FontHeadSize) {
        element.style.fontSize = `var(${fontSize})`;
    }

    public static setFontWeight(element: FrameworkElement, fontWeight: FontWeight) {
        element.style.fontWeight = `var(${fontWeight})`;
    }
}