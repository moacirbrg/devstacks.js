import { FontWeight } from '@libs/ui/enums/font-weight.enum';
import { FontFamily } from '@libs/ui/enums/font-family.enum';
import { TypoHeadingType } from '@libs/ui/typo/heading/typo-heading-type';
import { Color } from '../../enums/color.enum';

export class TypoHeadingGlobals {
    public static Color: Color = Color.Unknown;
    public static FontFamily: FontFamily = FontFamily.SansSerif;

    public static FontWeight: FontWeight = FontWeight.Bold;
    public static H1FontWeight: FontWeight|null = null;
    public static H2FontWeight: FontWeight|null = null;
    public static H3FontWeight: FontWeight|null = null;
    public static H4FontWeight: FontWeight|null = null;
    public static H5FontWeight: FontWeight|null = null;
    public static H6FontWeight: FontWeight|null = null;

    public static getWeight(size: TypoHeadingType): FontWeight {
        if (size === TypoHeadingType.H1 && this.H1FontWeight !== null) return TypoHeadingGlobals.H1FontWeight!;
        if (size === TypoHeadingType.H2 && this.H2FontWeight !== null) return TypoHeadingGlobals.H2FontWeight!;
        if (size === TypoHeadingType.H3 && this.H3FontWeight !== null) return TypoHeadingGlobals.H3FontWeight!;
        if (size === TypoHeadingType.H4 && this.H4FontWeight !== null) return TypoHeadingGlobals.H4FontWeight!;
        if (size === TypoHeadingType.H5 && this.H5FontWeight !== null) return TypoHeadingGlobals.H5FontWeight!;
        if (size === TypoHeadingType.H6 && this.H6FontWeight !== null) return TypoHeadingGlobals.H6FontWeight!;

        return TypoHeadingGlobals.FontWeight;
    }
}