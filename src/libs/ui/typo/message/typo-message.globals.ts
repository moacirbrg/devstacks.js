import { FontFamily } from '@libs/ui/enums/font-family.enum';
import { FontWeight } from '@libs/ui/enums/font-weight.enum';
import { FontContentSize } from '@libs/ui/enums/font-content-size.enum';
import { Color } from '@libs/ui/enums/color.enum';

export class TypoMessageGlobals {
    public static Color: Color = Color.Info;
    public static FontFamily: FontFamily = FontFamily.SansSerif;
    public static FontSize: FontContentSize = FontContentSize.Medium;
    public static FontWeight: FontWeight = FontWeight.Regular;
}