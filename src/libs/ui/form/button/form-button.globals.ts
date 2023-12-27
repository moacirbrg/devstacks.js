import { FontWeight } from '@libs/ui/enums/font-weight.enum';
import { FontFamily } from '@libs/ui/enums/font-family.enum';
import { Color } from '@libs/ui/enums/color.enum';
import { FontContentSize } from '@libs/ui/enums/font-content-size.enum';

export class FormButtonGlobals {
    public static Color: Color = Color.Unknown;
    public static FontFamily: FontFamily = FontFamily.SansSerif;
    public static FontSize: FontContentSize = FontContentSize.Medium;
    public static FontWeight: FontWeight = FontWeight.Regular;
}