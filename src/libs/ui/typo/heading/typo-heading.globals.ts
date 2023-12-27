import { FontWeight } from '@libs/ui/enums/font-weight.enum';
import { FontFamily } from '@libs/ui/enums/font-family.enum';
import { FontHeadSize } from '@libs/ui/enums/font-head-size';
import { Color } from '../../enums/color.enum';

export class TypoHeadingGlobals {
    public static Color: Color = Color.Neutral;
    public static FontFamily: FontFamily = FontFamily.SansSerif;

    public static FontWeight: FontWeight = FontWeight.Bold;
    public static H1FontWeight: FontWeight|null = null;
    public static H2FontWeight: FontWeight|null = null;
    public static H3FontWeight: FontWeight|null = null;
    public static H4FontWeight: FontWeight|null = null;
    public static H5FontWeight: FontWeight|null = null;
    public static H6FontWeight: FontWeight|null = null;

    public static getWeight(size: FontHeadSize): FontWeight {
        if (size === FontHeadSize.H1 && this.H1FontWeight !== null) return TypoHeadingGlobals.H1FontWeight!;
        if (size === FontHeadSize.H2 && this.H2FontWeight !== null) return TypoHeadingGlobals.H2FontWeight!;
        if (size === FontHeadSize.H3 && this.H3FontWeight !== null) return TypoHeadingGlobals.H3FontWeight!;
        if (size === FontHeadSize.H4 && this.H4FontWeight !== null) return TypoHeadingGlobals.H4FontWeight!;
        if (size === FontHeadSize.H5 && this.H5FontWeight !== null) return TypoHeadingGlobals.H5FontWeight!;
        if (size === FontHeadSize.H6 && this.H6FontWeight !== null) return TypoHeadingGlobals.H6FontWeight!;

        return TypoHeadingGlobals.FontWeight;
    }
}