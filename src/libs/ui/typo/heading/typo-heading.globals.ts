import { TypoHeadingSize } from '@libs/ui/typo/heading/typo-heading-size.enum';
import { TypoWeight } from '@libs/ui/typo/typo-weight.enum';
import { TypoFontFamily } from '@libs/ui/typo/typo-font-family.enum';

export class TypoHeadingGlobals {
    public static FontFamily: TypoFontFamily = TypoFontFamily.SansSerif;

    public static Weight: TypoWeight = TypoWeight.Bold;
    public static H1Weight: TypoWeight|null = null;
    public static H2Weight: TypoWeight|null = null;
    public static H3Weight: TypoWeight|null = null;
    public static H4Weight: TypoWeight|null = null;
    public static H5Weight: TypoWeight|null = null;
    public static H6Weight: TypoWeight|null = null;

    public static getWeight(size: TypoHeadingSize): TypoWeight {
        if (size === TypoHeadingSize.H1 && this.H1Weight !== null) return TypoHeadingGlobals.H1Weight!;
        if (size === TypoHeadingSize.H2 && this.H2Weight !== null) return TypoHeadingGlobals.H2Weight!;
        if (size === TypoHeadingSize.H3 && this.H3Weight !== null) return TypoHeadingGlobals.H3Weight!;
        if (size === TypoHeadingSize.H4 && this.H4Weight !== null) return TypoHeadingGlobals.H4Weight!;
        if (size === TypoHeadingSize.H5 && this.H5Weight !== null) return TypoHeadingGlobals.H5Weight!;
        if (size === TypoHeadingSize.H6 && this.H6Weight !== null) return TypoHeadingGlobals.H6Weight!;

        return TypoHeadingGlobals.Weight;
    }
}